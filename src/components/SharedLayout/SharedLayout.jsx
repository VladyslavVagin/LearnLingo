// @ts-nocheck
import React, { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import Buttons from "./Buttons/Buttons";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import MobileMenu from "./MobileMenu/MobileMenu";
import { ContainerHeader, MainSection } from "./SharedLayout.styled";

const SharedLayout = () => {
 const [isShowMobile, setIsShowMobile] = useState(false);
 const location = useLocation();

 useEffect(() => {
  setIsShowMobile(false);
 }, [location.pathname])

  return (
    <>
      <header>
        <ContainerHeader>
          <Logo />
          <NavMenu />
          <Buttons/>
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
