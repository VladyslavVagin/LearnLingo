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

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //     const datas = await getFavorites();
  //     console.log(datas);
  //     setFavorites(datas);
  //     } catch {
  //       toast.error('Database error');
  //     }
  //   }
  //   getData();
  //   return () => getData();
  // }, [])
  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Fetch favorites when user is logged in
          const favData = await getFavorites();
          setFavorites(favData);
        } catch (error) {
          toast.error("Error fetching favorites");
        }
      } else {
        // Clear favorites when user logs out
        setFavorites(null);
      }
    });

    // Unsubscribe from the listener when component unmounts
    return () => unsubscribe();
  }, []);


  return <div>
    {favorites?.length > 0 ? <ListFavTeach favorites={favorites}/> : <NoFavorites/>}
  </div>;
};

export default ListFavorites;
