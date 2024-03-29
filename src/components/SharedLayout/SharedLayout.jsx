import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import Buttons from "./Buttons/Buttons";
import { ContainerHeader } from "./SharedLayout.styled";

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
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
