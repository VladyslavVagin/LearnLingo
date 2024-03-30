// @ts-nocheck
import React, { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import Buttons from "./Buttons/Buttons";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import MobileMenu from "./MobileMenu/MobileMenu";
import Login from "../Modal/Login/Login";
import Register from "../Modal/Register/Register";
import { ContainerHeader, MainSection } from "./SharedLayout.styled";

const SharedLayout = () => {
 const [isShowMobile, setIsShowMobile] = useState(false);
 const [showLogin, setShowLogin] = useState(false);
 const [showRegister, setShowRegister] = useState(false);
 const location = useLocation();

 useEffect(() => {
  setIsShowMobile(false);
 }, [location.pathname])

 useEffect(() => {
  if(showLogin || showRegister) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return () => {
    document.body.style.overflow = "auto";
  }
}, [showLogin, showRegister])

  return (
    <>
    {showLogin && <Login setShowLogin={setShowLogin}/>}
    {showRegister && <Register setShowRegister={setShowRegister}/>}
      <header>
        <ContainerHeader>
          <Logo />
          <NavMenu />
          <Buttons setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>
          <BurgerBtn isShowMobile={isShowMobile} setIsShowMobile={setIsShowMobile}/>
        </ContainerHeader>
        {isShowMobile && <MobileMenu/>}
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
