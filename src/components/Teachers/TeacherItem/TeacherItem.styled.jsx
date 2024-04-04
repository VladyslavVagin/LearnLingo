import styled from "styled-components";

export const GeneralItem = styled.li`
  width: 100%;
  padding: 24px;
  background-color: var(--white-color);
  border-radius: 24px;
`

export const ImageContainer = styled.div`
  border: 3px solid #fbe9ba;
  border-radius: 100px;
  width: 120px;
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
`
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
`

export const ListData = styled.ul`
  display: flex;
  align-items: center;

  li {
    display: flex;
    align-items: center;
    column-gap: 8px;

    svg {
      fill: white;
      stroke: black;
    }
  }
`