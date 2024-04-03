// @ts-nocheck
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllTeachers } from '../../../redux/operations';
import { useTeachers } from '../../../hooks/useTeachers';


const ListTeachers = () => {
  const dispatch = useDispatch();
  const { teachers } = useTeachers();

  console.log(teachers);

  useEffect(() => {
    dispatch(fetchAllTeachers());
  }, [dispatch])


  return (
    <div>List of Teachers</div>
  )
}

export default ListTeachers