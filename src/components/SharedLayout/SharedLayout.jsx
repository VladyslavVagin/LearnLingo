// @ts-nocheck
import React, { Suspense, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet, useLocation } from "react-router-dom";
import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import Buttons from "./Buttons/Buttons";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import MobileMenu from "./MobileMenu/MobileMenu";
import Login from "../Modal/Login/Login";
import Register from "../Modal/Register/Register";
import { getUserData, whenLogOut } from "../../firebase/api";
import { ContainerHeader, MainSection } from "./SharedLayout.styled";

const SharedLayout = () => {
  const [isShowMobile, setIsShowMobile] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();
  const user = getUserData();

  useEffect(() => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user]);

  useEffect(() => {
    setIsShowMobile(false);
  }, [location.pathname]);

  useEffect(() => {
    if (showLogin || showRegister) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLogin, showRegister]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        showLogin && setShowLogin(false);
        showRegister && setShowRegister(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [showLogin, showRegister]);

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      {showRegister && <Register setShowRegister={setShowRegister} />}
      <header>
        <ContainerHeader>
          <Logo />
          <NavMenu isLogin={isLogin} />
          <Buttons
          whenLogOut={whenLogOut}
            setIsLogin={setIsLogin}
            setShowLogin={setShowLogin}
            setShowRegister={setShowRegister}
          />
          <BurgerBtn
            isShowMobile={isShowMobile}
            setIsShowMobile={setIsShowMobile}
          />
        </ContainerHeader>
        {isShowMobile && <MobileMenu />}
      </header>
      <MainSection>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </MainSection>
      <ToastContainer />
    </>
  );
};

export default SharedLayout;
