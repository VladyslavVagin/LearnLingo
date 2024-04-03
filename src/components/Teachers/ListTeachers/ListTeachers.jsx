import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { get, ref } from "firebase/database";
import { database } from '../../../firebase/firebase';

const ListTeachers = () => {
    const [teachersData, setTeachersData] = useState([]);

    const fetchData = async () => {
       const dbRef = ref(database, "teachers");
       const snapshot = await get(dbRef);
       if(snapshot.exists()) {
        setTeachersData(snapshot.val());
       } else {
        toast.error('Database ERROR');
       }
    }
   
  useEffect(() => {
    fetchData();
  }, [])

  console.log(teachersData);

  return (
    <div>List of Teachers</div>
  )
}

export default ListTeachers