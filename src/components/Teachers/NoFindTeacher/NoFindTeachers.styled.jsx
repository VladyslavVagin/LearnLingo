import styled from "styled-components";

export const NoFindContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;

  img {
    border-radius: 100px;
    width: 200px;
    animation: slideLeft 1000ms ease 1;
    border-radius: 74px;
    background: #e0e0e0;
    box-shadow: 5px 5px 10px var(--accent-color), -5px -5px 10px var(--accent-light);
    
    @media screen and (min-width: 480px) {
        width: 300px;
    }
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: var(--accent-color);
    animation: slideUp 1000ms ease 1;

    @media screen and (min-width: 480px) {
        font-size: 46px;
    }
  }
`;
