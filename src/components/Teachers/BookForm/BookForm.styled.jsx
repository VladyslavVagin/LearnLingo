import styled from "styled-components";

export const TitleForm = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--dark-color);
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375;
  color: var(--form-text);
  margin: 20px 0;
`;

export const InfoTeacher = styled.div`
  display: flex;
  align-items: center;
  column-gap: 14px;
  margin-bottom: 40px;

  img {
    border-radius: 50%;
  }

  div {
    p {
      font-size: 12px;
      font-weight: 500;
      line-height: 1.33333;
      color: var(--gray-card);
      margin-bottom: 4px;
    }

    span {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      color: var(--dark-color);
    }
  }
`;
