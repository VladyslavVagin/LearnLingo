// @ts-nocheck
import React, { useState, useEffect } from "react";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import {
  List,
  ShowMoreBtn,
} from "../../../Teachers/ListTeachers/ListTeachers.styled";

const ListFavTeach = ({ favorites, setFavorites }) => {
  const [teachersPerPage, setTeachersPerPage] = useState(4);
  const [showFavorites, setShowFavorites] = useState(favorites);

  useEffect(() => {
    const getFavoritesTeachers = () => {
      const firstFavorites = favorites.slice(0, teachersPerPage);
      setShowFavorites(firstFavorites);
    };
    getFavoritesTeachers();

    return () => getFavoritesTeachers();
  }, [favorites, teachersPerPage]);

  const handleShowMore = () => {
    setTeachersPerPage((prev) => (prev += 4));
  };

  return (
    <>
      <List>
        {showFavorites?.length > 0 && showFavorites?.map((teach, index) => (
          <FavoriteItem key={index} teach={teach} setFavorites={setFavorites} favorites={favorites}/>
        ))}
      </List>
      {(showFavorites?.length !== favorites?.length) && (<ShowMoreBtn type="button" onClick={handleShowMore}>Show more</ShowMoreBtn>)}
    </>
  );
};

export default ListFavTeach;
