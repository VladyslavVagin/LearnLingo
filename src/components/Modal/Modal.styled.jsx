import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.425), rgba(0, 0, 0, 0.425));
  z-index: 101;
`;

export const FormModal = styled.div`
  background-color: var(--white-color);
  max-width: 565px;
  width: 100%;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 64px;
  z-index: 102;
  height: 100%;
  overflow-y: scroll;
  animation: appearModal 1000ms ease 1;

  @keyframes appearModal {
    0% {
      opacity: 0;
      top: -100%;
    }
    100% {
      opacity: 1;
      top: 50%;
    }
  }
`;

export const CloseBtn = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 103;
  transition: var(--animation-hover);
  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  svg {
    stroke: var(--dark-color);
    transition: var(--animation-hover);
  }

  &:hover svg,
  &:focus svg {
    stroke: var(--accent-color);
  }
`;
