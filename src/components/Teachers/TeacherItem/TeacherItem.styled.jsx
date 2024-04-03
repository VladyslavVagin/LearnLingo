import styled from "styled-components";

export const ImageContainer = styled.div`
  border: 3px solid #fbe9ba;
  border-radius: 100px;
  width: 120px;
  height: 120px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    border-radius: 100px;
    width: 96px;
    height: 96px;
  }

  svg {
    position: absolute;
    top: 15px;
    right: 22px;
  }
`;
