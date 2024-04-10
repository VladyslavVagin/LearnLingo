// @ts-nocheck
import React from "react";
import { toast } from "react-toastify";
import sprite from "../../../icons/icons.svg";
import { ButtonsContainer, LogoutBtn, RegisterBtn } from "./Buttons.styled";
import { getUserData } from "../../../firebase/api";
import { useNavigate } from "react-router-dom";

const Buttons = ({ setIsLogin, setShowLogin, setShowRegister, whenLogOut }) => {
  const user = getUserData();
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
      <LogoutBtn type="button" onClick={!user ? handleLoginClick : handleLogOut}>
        <svg width={20} height={20}>
          <use xlinkHref={`${sprite}#icon-log-out`}></use>
        </svg>
        <p>{!user ? 'Log in' : 'Log out'}</p>
      </LogoutBtn>
      <RegisterBtn type="button" onClick={!user ? handleRegistration : handlerRegistrationLogin}>
        Registration
      </RegisterBtn>
    </ButtonsContainer>
  );
};

export default Buttons;
