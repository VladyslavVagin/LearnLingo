// @ts-nocheck
import React from "react";
import {useFavoritesData} from "../../../hooks/useFavoritesData"
import NoFavorites from "./NoFavorites/NoFavorites";
import ListFavTeach from "./ListFavTeach/ListFavTeach";

const ListFavorites = () => {
  const favorites = useFavoritesData();

  return <div>
    {favorites?.length > 0 ? <ListFavTeach favorites={favorites}/> : <NoFavorites/>}
  </div>;
};

export default ListFavorites;
