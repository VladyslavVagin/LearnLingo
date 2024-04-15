// @ts-nocheck
import React from 'react'
import SelectLevel from './SelectLevel/SelectLevel'
import SelectLanguage from './SelectLanguage/SelectLanguage'
import SelectPrice from './SelectPrice/SelectPrice'
import { SearchSection } from './SearchBar.styled'


const SearchBar = ({setLanguage, setLvl, setPrice}) => {
  return (
    <SearchSection>
        <SelectLanguage setLanguage={setLanguage}/>
        <SelectLevel setLvl={setLvl}/>
        <SelectPrice setPrice={setPrice}/>
    </SearchSection>
  )
}

export default SearchBar