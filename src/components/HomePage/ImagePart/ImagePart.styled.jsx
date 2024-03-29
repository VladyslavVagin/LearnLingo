import styled from "styled-components";

export const ImagePartContainer = styled.div`
  position: relative;
  width: 566px;
  height: 498px;
  background-color: var(--accent-light);
  border-radius: 30px;

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

  img {
    position: absolute;
    top: 9.5%;
    left: 20%;

    @media screen and (min-width: 900px) {
      left: 26%;
    }

    @media screen and (min-width: 1326px) {
      left: 20%;
    }
  }
`;

export const IconAppleContainer = styled.div`
  position: relative;
  background: var(--bg-macbook);
  width: 361px;
  height: 176px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  bottom: 0;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
