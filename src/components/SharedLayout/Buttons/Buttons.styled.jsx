import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 16px;
`

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
