import styled from "styled-components";

export const LevelsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 8px;
  margin-top: 32px;

  li {
    border-radius: 35px;
    padding: 8px 12px;
    border: 1px solid rgba(18, 20, 23, 0.2);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.14286;
    color: var(--dark-color);
  }
`;
