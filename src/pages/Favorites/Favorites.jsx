import React from "react";
import FavoritesPage from "../../components/FavoritesPage/FavoritesPage";
import { FavoriteContainer } from "./Favorites.styled";

const Favorites = () => {
  return (
    <FavoriteContainer>
      <FavoritesPage />
    </FavoriteContainer>
  );
};

export default Favorites;
