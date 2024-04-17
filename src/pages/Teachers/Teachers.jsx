// @ts-nocheck
import React, { useState, useEffect } from "react";
import ListTeachers from "../../components/Teachers/ListTeachers/ListTeachers";
import SearchBar from "../../components/Teachers/SearchBar/SearchBar";
import {
  getTeachersByLanguage,
  getTeachersByLvl,
  getTeachersByPrice,
} from "../../firebase/api";
import { PageTeachers } from "./Teachers.styled";

const Teachers = () => {
  let filtered;
  // local state for values of search selects
  const [language, setLanguage] = useState(null);
  const [lvl, setLvl] = useState(null);
  const [price, setPrice] = useState(null);

  // local state for data's arrays by choosing one select
  const [filteredLangs, setFilteredLangs] = useState(null);
  const [filteredLvl, setFilteredLvl] = useState(null);
  const [filteredPrice, setFilteredPrice] = useState(null);

  console.log(language, lvl, price);
  const combineArrays = (arr1, arr2, arr3) => {
    return arr1?.filter(obj1 => {
      return arr2?.some(obj2 => {
        return arr3?.some(obj3 => {
          return obj1?.id === obj2?.id && obj2?.id === obj3?.id;
        });
      });
    });
  };
  
  const combinedArray = combineArrays(filteredLangs, filteredLvl, filteredPrice);
  console.log(combineArrays);


  useEffect(() => {
    if (price) {
      async function filterByPrice() {
        try {
          const teachersFilteredByPrice = await getTeachersByPrice(price);
          setFilteredPrice(teachersFilteredByPrice);
        } catch (error) {
          console.log(error);
        }
      }
      filterByPrice();
    } else {
      setFilteredPrice(null);
      return;
    }
  }, [price]);

  useEffect(() => {
    if (lvl) {
      async function filterByLevels() {
        try {
          const teachersFilteredByLevels = await getTeachersByLvl(lvl);
          setFilteredLangs(teachersFilteredByLevels);
        } catch (error) {
          console.log(error);
        }
      }
      filterByLevels();
    } else {
      setFilteredLvl(null);
      return;
    }
  }, [lvl]);

  useEffect(() => {
    if (language) {
      async function filterByLang() {
        try {
          const teachersFilteredByLang = await getTeachersByLanguage(language);
          setFilteredLangs(teachersFilteredByLang);
        } catch (error) {
          console.log(error);
        }
      }
      filterByLang();
    } else {
      setFilteredLangs(null);
      return;
    }
  }, [language]);

  return (
    <PageTeachers>
      <SearchBar
        setLanguage={setLanguage}
        setLvl={setLvl}
        setPrice={setPrice}
      />
      <ListTeachers filtered={filtered} />
    </PageTeachers>
  );
};

export default Teachers;
