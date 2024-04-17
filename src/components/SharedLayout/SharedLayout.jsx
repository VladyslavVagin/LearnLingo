// @ts-nocheck
import React, { Suspense, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import Buttons from "./Buttons/Buttons";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import MobileMenu from "./MobileMenu/MobileMenu";
import Login from "../Modal/Login/Login";
import Register from "../Modal/Register/Register";
import { whenLogOut } from "../../firebase/api";
import { ContainerHeader, MainSection } from "./SharedLayout.styled";

const SharedLayout = () => {
  const [isShowMobile, setIsShowMobile] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const location = useLocation();

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
          <NavMenu />
          <Buttons
            whenLogOut={whenLogOut}
            setShowLogin={setShowLogin}
            setShowRegister={setShowRegister}
          />
          <BurgerBtn
            isShowMobile={isShowMobile}
            setIsShowMobile={setIsShowMobile}
          />
        </ContainerHeader>
        {isShowMobile && (
          <MobileMenu
            whenLogOut={whenLogOut}
            setShowLogin={setShowLogin}
            setShowRegister={setShowRegister}
          />
        )}
      </header>
      <MainSection>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </MainSection>
      <ToastContainer />
    </>
  );
};

export default SharedLayout;
