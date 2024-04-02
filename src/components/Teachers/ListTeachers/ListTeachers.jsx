import React from 'react'
import { getDatabase } from "firebase/database";

const ListTeachers = () => {
    const db = getDatabase();
    console.log(db)
   

  return (
    <div>ListTeachers</div>
  )
}

export default ListTeachers