// @ts-nocheck
import React, { useState, useEffect } from 'react'
import ListTeachers from '../../components/Teachers/ListTeachers/ListTeachers'
import SearchBar from '../../components/Teachers/SearchBar/SearchBar'
import { getTeachersByLanguage } from '../../firebase/api'
import { PageTeachers } from './Teachers.styled'

const Teachers = () => {
  const [language, setLanguage] = useState(null);
  const [lvl, setLvl] = useState(null);
  const [price, setPrice] = useState(null);

  const [filteredLangs, setFilteredLangs] = useState(null);
 
  console.log(language, lvl, price);
  console.log(filteredLangs);

  useEffect(() => {
    if(language) {
      async function filterByLang () {
        try {
          const teachersFilteredByLang = await getTeachersByLanguage(language);
          setFilteredLangs(teachersFilteredByLang);
        } catch (error) {
          
        }
      }
      filterByLang();
    } else {
      setFilteredLangs(null);
      return;
    }
  }, [language])

  return (
    <PageTeachers>
      <SearchBar setLanguage={setLanguage} setLvl={setLvl} setPrice={setPrice}/>
      <ListTeachers filteredLangs={filteredLangs}/>
    </PageTeachers>
  )
}

export default Teachers