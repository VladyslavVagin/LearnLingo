import styled from "styled-components";
import { Link } from "react-router-dom";

export const TitleContainer = styled.div`
  background-color: var(--bg-lightblue);
  border-radius: 30px;
  max-width: 720px;
  padding: 98px 108px 98px 64px;
`;

export const Title = styled.h1`
  color: var(--dark-color);
  font-size: 48px;
  font-weight: 500;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  margin-bottom: 32px;

  span {
    font-style: italic;
    font-weight: 400;
    background-color: var(--accent-light);
  }
`;

export const TitleText = styled.p`
  max-width: 471px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375;
  letter-spacing: -0.02em;
  margin-bottom: 64px;
`;

export const GetStartedBtn = styled(Link)`
  background-color: var(--accent-color);
  border-radius: 12px;
  padding: 16px 88px;
  width: 267px;
  height: 60px;
  font-size: 18px;
  font-weight: 700;
  color: var(--dark-color);
  line-height: 1.55556;
  transition: var(--animation-hover);

  &:hover,
  &:focus {
    background-color: var(--accent-light);
  }
`;
