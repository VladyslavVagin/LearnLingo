// @ts-nocheck
import React from "react";
import sprite from "../../../icons/icons.svg";
import ColorPicker from "../ColorPicker/ColorPicker";
import {
  BackdropMobile,
  MobileMenuContent,
  MobileNavList,
  StyledLink,
  Buttons,
  LogoutBtn,
  RegisterBtn,
} from "./MobileMenu.styled";

const MobileMenu = () => {
  return (
    <BackdropMobile>
      <MobileMenuContent>
        <div>
          <MobileNavList>
            <li>
              <StyledLink to={"/home"}>Home</StyledLink>
            </li>
            <li>
              <StyledLink to={"/teachers"}>Teachers</StyledLink>
            </li>
            <li>
              <StyledLink to={"/favorites"}>Favorites</StyledLink>
            </li>
            <li>
              <ColorPicker/>
            </li>
          </MobileNavList>
          <Buttons>
            <LogoutBtn type="button">
              <svg width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-log-out`}></use>
              </svg>
              <p>Log in</p>
            </LogoutBtn>
            <RegisterBtn type="button">Registration</RegisterBtn>
          </Buttons>
        </div>
      </MobileMenuContent>
    </BackdropMobile>
  );
};

export default MobileMenu;
