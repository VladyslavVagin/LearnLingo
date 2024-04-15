import React from 'react'
import SelectLevel from './SelectLevel/SelectLevel'
import SelectLanguage from './SelectLanguage/SelectLanguage'
import { SearchSection } from './SearchBar.styled'


const SearchBar = () => {
  return (
    <SearchSection>
        <SelectLanguage/>
        <SelectLevel/>
    </SearchSection>
  )
}

export default SearchBar