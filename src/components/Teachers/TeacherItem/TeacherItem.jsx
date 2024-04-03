import React from "react";
import sprite from "../../../icons/icons.svg"
import { ImageContainer } from "./TeacherItem.styled";

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

  return <li>
    <div>
        <ImageContainer>
            <img src={avatar_url} alt={`avatar of ${name}${surname}`}/>
            <svg width={12} height={12}>
                <use xlinkHref={`${sprite}#icon-green-circle`}></use>
            </svg>
        </ImageContainer>
    </div>
  </li>;
};

export default TeacherItem;
