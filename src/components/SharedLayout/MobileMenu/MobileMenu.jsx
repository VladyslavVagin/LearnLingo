// @ts-nocheck
import React from "react";
import { BackdropMobile, MobileMenuContent, MobileNavList, StyledLink } from "./MobileMenu.styled";

const MobileMenu = () => {
  return (
    <BackdropMobile>
      <MobileMenuContent>
        <div>
            <MobileNavList>
                <li>
                    <StyledLink to={'/home'}>Home</StyledLink>
                </li>
                <li>
                    <StyledLink to={'/teachers'}>Teachers</StyledLink>
                </li>
                <li>
                    <StyledLink to={'/favorites'}>Favorites</StyledLink>
                </li>
            </MobileNavList>
        </div>
      </MobileMenuContent>
    </BackdropMobile>
  );
};

export default MobileMenu;
