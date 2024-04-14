// @ts-nocheck
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import NoFavorites from "./NoFavorites/NoFavorites";
import { auth } from "../../../firebase/firebase";
import ListFavTeach from "./ListFavTeach/ListFavTeach";
import { getFavorites } from "../../../firebase/api";

const ListFavorites = () => {
  const [favorites, setFavorites] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const favData = await getFavorites();
          setFavorites(favData);
        } catch (error) {
          toast.error("Error fetching favorites");
        }
      } else {
        setFavorites(null);
      }
    });
    return () => unsubscribe();
  }, []);


  return <div>
    {favorites?.length > 0 ? <ListFavTeach favorites={favorites}/> : <NoFavorites/>}
  </div>;
};

export default ListFavorites;
