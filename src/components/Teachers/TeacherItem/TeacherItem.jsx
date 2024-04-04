import React from "react";
import sprite from "../../../icons/icons.svg"
import { GeneralItem, ImageContainer, ListData, ListItemContainer, TitleCardContainer } from "./TeacherItem.styled";

const TeacherItem = ({ teach }) => {
  const {
    avatar_url,
    conditions,
    experience,
    languages,
    lesson_info,
    lessons_done,
    levels,
    name,
    price_per_hour,
    rating,
    reviews,
    surname,
  } = teach;

  return <GeneralItem>
    <ListItemContainer>
        <ImageContainer>
            <img src={avatar_url} alt={`avatar of ${name}${surname}`}/>
            <svg width={12} height={12}>
                <use xlinkHref={`${sprite}#icon-green-circle`}></use>
            </svg>
        </ImageContainer>
        <div>
        <TitleCardContainer>
          <h2>Languages</h2>
          <h3>{name} {surname}</h3>
        </TitleCardContainer>
        <div>
          <ListData>
            <li>
              <svg width={16} height={16}>
                <use xlinkHref={`${sprite}#icon-book`}></use>
              </svg>
              <p>Lessons online</p>
            </li>
          </ListData>
        </div>
        </div>
    </ListItemContainer>
  </GeneralItem>;
};

export default TeacherItem;
