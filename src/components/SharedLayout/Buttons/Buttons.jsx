// @ts-nocheck
import React from "react";
import { auth } from "../../../firebase/firebase";
import { useAuth } from "../../../hooks/useAuth";
import sprite from "../../../icons/icons.svg";
import { ButtonsContainer, LogoutBtn, RegisterBtn } from "./Buttons.styled";

const Buttons = ({ setShowLogin, setShowRegister }) => {
  const { isLoggedIn } = useAuth();

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleRegistration = () => {
    setShowRegister(true);
  };

  const handleLogOut = () => {
    auth.signOut();
  }

  return (
    <ButtonsContainer>
      <LogoutBtn type="button" onClick={isLoggedIn ? handleLogOut : handleLoginClick}>
        <svg width={20} height={20}>
          <use xlinkHref={`${sprite}#icon-log-out`}></use>
        </svg>
        <p>{isLoggedIn ? 'Log out' : 'Log in'}</p>
      </LogoutBtn>
      <RegisterBtn type="button" onClick={handleRegistration}>
        Registration
      </RegisterBtn>
    </ButtonsContainer>
  );
};

export default Buttons;
