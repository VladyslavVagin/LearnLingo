// @ts-nocheck
import React from "react";
import { toast } from "react-toastify";
import sprite from "../../../icons/icons.svg";
import { ButtonsContainer, LogoutBtn, RegisterBtn, UserName } from "./Buttons.styled";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase";

const Buttons = ({ setShowLogin, setShowRegister, whenLogOut }) => {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLogin"));
  const userName = auth?.currentUser?.displayName;
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleRegistration = () => {
    setShowRegister(true);
  };

  const handlerRegistrationLogin = () => {
    toast.warn("Please Log Out first for registration");
  };

  const handleLogOut = () => {
    whenLogOut();
    navigate("/home");
  };

  return (
    <ButtonsContainer>
      <LogoutBtn
        type="button"
        onClick={!isLoggedIn ? handleLoginClick : handleLogOut}
      >
        <svg width={20} height={20}>
          <use xlinkHref={`${sprite}#icon-log-out`}></use>
        </svg>
        <p>{!isLoggedIn ? "Log in" : "Log out"}</p>
      </LogoutBtn>
      {isLoggedIn ? (
        <UserName>
          <p>Welcome, {userName}</p>
        </UserName>
      ) : (
        <RegisterBtn
          type="button"
          onClick={!isLoggedIn ? handleRegistration : handlerRegistrationLogin}
        >
          Registration
        </RegisterBtn>
      )}
    </ButtonsContainer>
  );
};

export default Buttons;
