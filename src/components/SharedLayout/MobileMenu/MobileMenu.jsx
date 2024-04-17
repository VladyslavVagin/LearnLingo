// @ts-nocheck
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import sprite from "../../../icons/icons.svg";
import ColorPicker from "../ColorPicker/ColorPicker";
import { auth } from "../../../firebase/firebase";
import {
  BackdropMobile,
  MobileMenuContent,
  MobileNavList,
  StyledLink,
  Buttons,
  LogoutBtn,
  RegisterBtn,
  UserName
} from "./MobileMenu.styled";

const MobileMenu = ({ setShowLogin, setShowRegister, whenLogOut }) => {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLogin")) || false;
  const [userName, setUserName] = useState(auth?.currentUser?.displayName);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
       setUserName(user.displayName);
      }
    });
    return () => unsubscribe();
  }, []);

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
            {isLoggedIn && (
              <li>
                <StyledLink to={"/favorites"}>Favorites</StyledLink>
              </li>
            )}
            <li>
              <ColorPicker />
            </li>
          </MobileNavList>
          <Buttons>
            <LogoutBtn type="button" onClick={!isLoggedIn ? handleLoginClick : handleLogOut}>
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
          </Buttons>
        </div>
      </MobileMenuContent>
    </BackdropMobile>
  );
};

export default MobileMenu;
