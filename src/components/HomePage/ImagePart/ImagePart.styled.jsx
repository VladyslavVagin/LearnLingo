import styled from "styled-components";

export const ImagePartContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 720px;
  height: 400px;
  background-color: var(--accent-light);
  border-radius: 30px;
  overflow: hidden;

  @media screen and (min-width: 524px) {
    height: 498px;
  }

  @media screen and (min-width: 900px) {
    width: 720px;
  }

  @media screen and (min-width: 1326px) {
    width: 566px;
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  animation: slideUp 1000ms ease 1;

  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

export const IconAppleContainer = styled.div`
  position: relative;
  background: var(--bg-macbook);
  width: 260px;
  height: 96px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  bottom: 1px;
  margin-top: -60px;

  @media screen and (min-width: 438px) {
    width: 361px;
    height: 176px;
    margin-top: -100px;
    bottom: -36px;
  }

  svg {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
