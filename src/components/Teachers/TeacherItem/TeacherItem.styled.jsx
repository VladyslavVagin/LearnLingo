import styled from "styled-components";

export const GeneralItem = styled.li`
  width: 100%;
  padding: 24px;
  background-color: var(--white-color);
  border-radius: 24px;
  position: relative;
`;

export const ImageContainer = styled.div`
  border: 3px solid var(--accent-color);
  border-radius: 100px;
  width: 120px;
  min-width: 120px;
  height: 120px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    border-radius: 100px;
    width: 96px;
    height: 96px;
  }

  svg {
    position: absolute;
    top: 15px;
    right: 22px;
  }
`;

export const ListItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 48px;
`;
export const TitleCardContainer = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: var(--gray-card);
    margin-bottom: 8px;
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
    color: var(--dark-color);
  }
`;

export const UpperContent = styled.div`
  width: 800px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const ListData = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 16px;

  li:not(:last-of-type) {
    border-right: 1px solid rgba(18, 20, 23, 0.2);
    padding-right: 16px;
  }

  li {
    display: flex;
    align-items: center;
    column-gap: 8px;
    font-weight: 500;
    font-size: 16px;

    svg {
      fill: white;
      stroke: black;
    }
  }
`;

export const Price = styled.span`
  color: var(--price-color);
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  li {
    p {
      color: var(--gray-card);
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;

      span {
        color: var(--dark-color);
      }
    }
  }
`;

export const Langs = styled.span`
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;

export const ReadMoreBtn = styled.p`
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--dark-color);
  margin-top: 16px;
`;

export const BtnAddFavorite = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 24px;
  right: 24px;

  svg {
    fill: white;
    stroke: var(--dark-color);
    transition: var(--animation-hover);
  }

  &:hover svg,
  &:focus svg {
    stroke: var(--accent-color);
  }
`;
