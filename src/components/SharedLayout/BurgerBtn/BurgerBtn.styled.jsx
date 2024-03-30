// @ts-nocheck
import styled from "styled-components";

export const BurgerBtnContainer = styled.div`
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  width: 56px;
  height: 25px;
`;

export const BtnIcon = styled.div`
    width: 37px;
    height: 2px;
    background-color: ${({isshowmobile}) => (isshowmobile === "true" ? "transparent" : "var(--dark-color)")};
    transition: var(--animation-hover);
    transform: ${({isshowmobile}) => (isshowmobile === "true" && "translateX(-50px)")};

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      width: 37px;
      height: 2px;
      background-color: var(--dark-color);
      transition: var(--animation-hover);
    }

    &::before {
      transform: ${({isshowmobile}) => (isshowmobile === "true" ? " rotate(45deg) translate(35px, -35px)" : "translateY(-6px)")};
    }

    &::after {
      transform: ${({isshowmobile}) => (isshowmobile === "true" ? " rotate(-45deg) translate(35px, 35px)" : "translateY(6px)")};
    }
`