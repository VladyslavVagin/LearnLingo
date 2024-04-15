// @ts-nocheck
import React, { useState } from 'react'
import ListTeachers from '../../components/Teachers/ListTeachers/ListTeachers'
import SearchBar from '../../components/Teachers/SearchBar/SearchBar'
import { PageTeachers } from './Teachers.styled'

const Teachers = () => {
  const [language, setLanguage] = useState(null);
  const [lvl, setLvl] = useState(null);
  const [price, setPrice] = useState(null);
 
  console.log(language, lvl, price);

  return (
    <PageTeachers>
      <SearchBar setLanguage={setLanguage} setLvl={setLvl} setPrice={setPrice}/>
      <ListTeachers/>
    </PageTeachers>
  )
}

export default Teachers