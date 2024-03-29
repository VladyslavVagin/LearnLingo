import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import Buttons from "./Buttons/Buttons";
import { ContainerHeader, MainSection } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <header>
        <ContainerHeader>
          <Logo />
          <NavMenu />
          <Buttons/>
        </ContainerHeader>
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
