// @ts-nocheck
import React, { useState, useEffect } from "react";
import ListTeachers from "../../components/Teachers/ListTeachers/ListTeachers";
import SearchBar from "../../components/Teachers/SearchBar/SearchBar";
import { getAllFiltered } from "../../firebase/api";
import { PageCont, PageTeachers } from "./Teachers.styled";

const Teachers = () => {
  // local state for values of search selects
  const [language, setLanguage] = useState(null);
  const [lvl, setLvl] = useState(null);
  const [price, setPrice] = useState(null);

  // local state for filtered teachers
  const [filtered, setFiltered] = useState(null);

  useEffect(() => {
    const getFilteredTeachers = async () => {
      try {
        const filteredTeachers = await getAllFiltered(language, lvl, price);
        setFiltered(filteredTeachers);
      } catch (error) {
        console.error("Error fetching filtered teachers:", error);
      }
    };

    getFilteredTeachers();
  }, [language, lvl, price]);

  return (
    <PageTeachers>
      <PageCont>
        <SearchBar
          setLanguage={setLanguage}
          setLvl={setLvl}
          setPrice={setPrice}
        />
        <ListTeachers filtered={filtered} lvl={lvl} />
      </PageCont>
    </PageTeachers>
  );
};

export default Teachers;
