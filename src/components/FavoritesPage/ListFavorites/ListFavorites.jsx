// @ts-nocheck
import React, { useState, useEffect } from "react";
import { getFavorites } from "../../../firebase/api";
import NoFavorites from "./NoFavorites/NoFavorites";
import ListFavTeach from "./ListFavTeach/ListFavTeach";

const ListFavorites = () => {
  const [favoritesPerPage, setFavoritesPerPage] = useState(4);
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    const getFavoritesData = async () => {
      let favoritesData = await getFavorites(favoritesPerPage);
      setFavorites(favoritesData);
    };
    getFavoritesData();
  }, [favoritesPerPage]);

  console.log(favorites);

  return <div>
    {!favorites ? <NoFavorites/> : <ListFavTeach setFavoritesPerPage={setFavoritesPerPage} favorites={favorites}/>}
  </div>;
};

export default ListFavorites;
