// @ts-nocheck
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BackdropMobile = styled.div`
  position: fixed;
  z-index: 99;
  width: 100dvw;
  height: calc(100dvh + 60px);
  animation: slideFromRight 1000ms ease 1;

  @keyframes slideFromRight {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const MobileMenuContent = styled.div`
  position: absolute;
  top: -60px;
  right: 0;
  background-color: var(--white-color);
  width: 100dvw;
  height: calc(100dvh + 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: var(--animation-hover);
`;

export const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 28px;
  margin-top: 120px;
`;

export const StyledLink = styled(NavLink)`
  line-height: 1.25;
  color: var(--dark-color);
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;

  &.active {
    border-bottom: 2px solid var(--accent-color);
  }
`;
