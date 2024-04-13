// @ts-nocheck
import React from "react";
import { toast } from "react-toastify";
import sprite from "../../../icons/icons.svg";
import { ButtonsContainer, LogoutBtn, RegisterBtn } from "./Buttons.styled";
import { useNavigate } from "react-router-dom";

const Buttons = ({ setIsLogin, setShowLogin, setShowRegister, whenLogOut }) => {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLogin'));
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleRegistration = () => {
    setShowRegister(true);
  };

  const handlerRegistrationLogin = () => {
    toast.warn('Please Log Out first for registration');
  }

  const handleLogOut = () => {
    whenLogOut(setIsLogin);
    navigate('/home');
  }

  return (
    <ButtonsContainer>
      <LogoutBtn type="button" onClick={!isLoggedIn ? handleLoginClick : handleLogOut}>
        <svg width={20} height={20}>
          <use xlinkHref={`${sprite}#icon-log-out`}></use>
        </svg>
        <p>{!isLoggedIn ? 'Log in' : 'Log out'}</p>
      </LogoutBtn>
      <RegisterBtn type="button" onClick={!isLoggedIn ? handleRegistration : handlerRegistrationLogin}>
        Registration
      </RegisterBtn>
    </ButtonsContainer>
  );
};

export default Buttons;
