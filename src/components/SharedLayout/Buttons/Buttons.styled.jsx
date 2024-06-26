import styled from "styled-components";

export const ButtonsContainer = styled.div`
  @media screen and (max-width: 899.98px) {
    display: none;
  }

  @media screen and (min-width: 900px) {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }
`;

export const LogoutBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  column-gap: 8px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  color: var(--dark-color);
  transition: var(--animation-hover);

  svg {
    stroke: var(--accent-color);
    fill: var(--white-color);
    transition: var(--animation-hover);
  }

  &:hover,
  &:focus {
    color: var(--accent-color);
    transform: scale(1.1);
  }
`;

export const RegisterBtn = styled.button`
  border-radius: 12px;
  padding: 14px 39px;
  width: 166px;
  height: 48px;
  outline: none;
  border: none;
  color: var(--white-color);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  background-color: var(--dark-color);
  transition: var(--animation-hover);

  &:hover,
  &:focus {
    background-color: var(--accent-color);
  }
`;


export const UserName = styled.div`
 width: 164px;
 height: 46px;
 text-align: center;
 background-color: white;
 border: 1px solid var(--accent-color);
 color: var(--accent-color);
 border-radius: 12px;
 display: flex;
 align-items: center;
 justify-content: center;
`