import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  background-color: var(--bg-lightblue);
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

export const ShowMoreBtn = styled.button`
  border-radius: 12px;
  width: 183px;
  height: 60px;
  outline: none;
  border: none;
  background-color: var(--accent-color);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.55556;
  display: block;
  margin: 0 auto;
  transition: var(--animation-hover);

  &:hover,
  &:focus {
    background-color: var(--accent-light);
  }
`;
