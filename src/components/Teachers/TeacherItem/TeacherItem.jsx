// @ts-nocheck
import React from "react";
import sprite from "../../../icons/icons.svg";
import {
  GeneralItem,
  ImageContainer,
  Langs,
  ListData,
  ListInfo,
  ListItemContainer,
  Price,
  TitleCardContainer,
  UpperContent,
} from "./TeacherItem.styled";

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

  return (
    <GeneralItem>
      <ListItemContainer>
        <ImageContainer>
          <img src={avatar_url} alt={`avatar of ${name}${surname}`} />
          <svg width={12} height={12}>
            <use xlinkHref={`${sprite}#icon-green-circle`}></use>
          </svg>
        </ImageContainer>
        <div>
          <UpperContent>
            <TitleCardContainer>
              <h2>Languages</h2>
              <h3>
                {name} {surname}
              </h3>
            </TitleCardContainer>
            <ListData>
              <li>
                <svg width={16} height={16}>
                  <use xlinkHref={`${sprite}#icon-book`}></use>
                </svg>
                <p>Lessons online</p>
              </li>
              <li>
                <p>Lessons done:</p>
                <span>{lessons_done}</span>
              </li>
              <li>
                <svg width={16} height={16}>
                  <use xlinkHref={`${sprite}#icon-star`}></use>
                </svg>
                <p>
                  Rating: <span>{rating}</span>
                </p>
              </li>
              <li>
                <p>Price / 1 hour:</p>
                <Price>{price_per_hour}$</Price>
              </li>
            </ListData>
          </UpperContent>
          <div>
            <ListInfo>
              <li>
                <p>
                  Speaks:{" "}
                  <Langs>
                    {[...languages.slice(0, -1), languages.slice(-1)[0]].join(
                      ", "
                    )}
                  </Langs>
                </p>
              </li>
              <li>
                <p>Lesson Info: <span>{lesson_info}</span></p>
              </li>
              <li><p>Conditions: <span>{conditions}</span></p></li>
            </ListInfo>
          </div>
        </div>
      </ListItemContainer>
    </GeneralItem>
  );
};

export default TeacherItem;
