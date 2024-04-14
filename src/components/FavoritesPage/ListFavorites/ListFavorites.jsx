// @ts-nocheck
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { toast } from "react-toastify";
import NoFavorites from "./NoFavorites/NoFavorites";
import ListFavTeach from "./ListFavTeach/ListFavTeach";
import { getFavorites } from "../../../firebase/api";

const ListFavorites = ({favorites, setFavorites}) => {

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
  }, [setFavorites]);

  return (
    <div>
      {favorites?.length > 0 ? (
        <ListFavTeach favorites={favorites} setFavorites={setFavorites} />
      ) : (
        <NoFavorites />
      )}
    </div>
  );
};

export default ListFavorites;