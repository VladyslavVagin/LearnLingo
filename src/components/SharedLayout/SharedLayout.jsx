// @ts-nocheck
import React, { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import Buttons from "./Buttons/Buttons";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import MobileMenu from "./MobileMenu/MobileMenu";
import { ContainerHeader, MainSection } from "./SharedLayout.styled";

const SharedLayout = () => {
 const [isShowMobile, setIsShowMobile] = useState(false);

  return (
    <>
      <header>
        <ContainerHeader>
          <Logo />
          <NavMenu />
          <Buttons/>
          <BurgerBtn isShowMobile={isShowMobile} setIsShowMobile={setIsShowMobile}/>
        </ContainerHeader>
        {isShowMobile && <MobileMenu isShowMobile={isShowMobile}/>}
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
