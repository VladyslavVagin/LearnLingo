import styled from "styled-components";

export const ListReviewers = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  margin: 32px 0;

  li {
    display: flex;
    flex-direction: column;
    row-gap: 16px;

    p {
      font-size: 16px;
      font-weight: 500;
      color: var(--dark-color);
      line-height: 1.5;
    }
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 12px;
  animation: appearLeft 1000ms ease 1;

  img {
    border-radius: 50%;
  }
`;

export const Reviewer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: var(--gray-card);
  }

  div {
    display: flex;
    align-items: center;
    column-gap: 8px;

    span {
      font-size: 14px;
      font-weight: 500;
      color: var(--dark-color);
      line-height: 1.28571;
    }
  }

  @keyframes appearLeft {
        0% {
            opacity: 0;
            transform: translateX(100%);
        }
        100% {
            opacity: 1;
            transform: translateX(0%);
        }
    }
`;
