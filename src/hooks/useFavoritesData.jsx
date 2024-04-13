import { useState, useEffect } from "react";
import { manageFavorites } from "../firebase/api";
export function useFavoritesData() {
    const [favorites, setFavorites] = useState(null);
  
    useEffect(() => {
      const fetchFavorites = async () => {
        const favoritesData = await manageFavorites('get');
        setFavorites(favoritesData);
      };
      fetchFavorites();
    }, []);
  
    return favorites;
  }