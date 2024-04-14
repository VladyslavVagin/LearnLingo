import React from "react";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import {
  List,
  ShowMoreBtn,
} from "../../../Teachers/ListTeachers/ListTeachers.styled";

const ListFavTeach = ({ favorites, setFavorites }) => {
  return (
    <>
      <List>
        {favorites?.length > 0 && favorites?.map((teach, index) => (
          <FavoriteItem key={index} teach={teach} setFavorites={setFavorites}/>
        ))}
      </List>
      {favorites?.length > 4 && (<ShowMoreBtn type="button">Show more</ShowMoreBtn>)}
    </>
  );
};

export default ListFavTeach;
