import styled from "styled-components";

export const BookBtn = styled.button`
  outline: none;
  border: none;
  border-radius: 12px;
  width: 232px;
  height: 60px;
  background-color: var(--accent-color);
  margin-top: 32px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.55556;

  &:hover,
  &:focus {
    background-color: var(--accent-light);
  }
`;
