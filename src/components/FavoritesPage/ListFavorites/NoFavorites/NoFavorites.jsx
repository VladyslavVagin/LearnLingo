import React from "react";
import noteachersImg from "../../../../img/noteachers.webp";
import { NoTeachersTitle, PictContainer } from "./NoFavorites.styled";

const NoFavorites = () => {
  return (
    <div>
      <PictContainer>
        <img src={noteachersImg} alt="animated teachers" />
      </PictContainer>
      <NoTeachersTitle>No teachers in Your "Favorites" collection</NoTeachersTitle>
    </div>
  );
};

export default NoFavorites;
