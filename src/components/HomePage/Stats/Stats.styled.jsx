import styled from "styled-components";

export const StatsContainer = styled.div`
  width: 100%;
  border: 1.5px dashed var(--accent-color);
  border-radius: 30px;
  margin-top: 24px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 524px) {
    height: 116px;
  }
`;

export const StatsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  @media screen and (min-width: 524px){
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px 100px;
  }

  li {
    display: flex;
    align-items: center;
    column-gap: 10px;

    span {
      font-size: 28px;
      font-weight: 500;
      letter-spacing: -0.02em;
      line-height: 1.14286;
      color: var(--dark-color);
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.28571;
      letter-spacing: -0.02em;
      color: var(--stat-textColor);
    }
  }
`;
