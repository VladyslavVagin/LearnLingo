import styled from "styled-components";

export const MainSection = styled.main`
  min-height: calc(100% - 92px);
`;

export const ContainerHeader = styled.div`
  position: relative;
  z-index: 100;
  max-width: 1312px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 524px) {
    padding: 20px 64px;
  }
`;
