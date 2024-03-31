// @ts-nocheck
import React, { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { setUser, unsetUser } from "../../redux/usersSlice.js";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase.js";
import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import Buttons from "./Buttons/Buttons";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import MobileMenu from "./MobileMenu/MobileMenu";
import { ContainerHeader, MainSection } from "./SharedLayout.styled";
import Login from "../Modal/Login/Login";
import Register from "../Modal/Register/Register";

const SharedLayout = () => {
  const [isShowMobile, setIsShowMobile] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();



  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user?.emailVerified) {
        dispatch(setUser({ name: user.displayName, email: user.email }));
      } else {
        dispatch(unsetUser());
      }
    });

    return listen;
  }, [dispatch]);

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
    </>
  );
};

export default SharedLayout;
