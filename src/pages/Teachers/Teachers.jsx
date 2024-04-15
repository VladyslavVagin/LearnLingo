import React from 'react'
import ListTeachers from '../../components/Teachers/ListTeachers/ListTeachers'
import SearchBar from '../../components/Teachers/SearchBar/SearchBar'
import { PageTeachers } from './Teachers.styled'

const Teachers = () => {
  return (
    <PageTeachers>
      <SearchBar/>
      <ListTeachers/>
    </PageTeachers>
  )
}

export default Teachers