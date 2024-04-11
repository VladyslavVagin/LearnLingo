// @ts-nocheck
import React, { useEffect, useState } from "react";
import TeacherItem from "../TeacherItem/TeacherItem";
import { List, ShowMoreBtn } from "./ListTeachers.styled";
import { getAllTeachers } from "../../../firebase/api";

const ListTeachers = () => {
  const [teachersPerPage, setTeachersPerPage] = useState(4);
  const [teachers, setTeachers] = useState(null);

  useEffect(() => {
    const getTeachersData = async () => {
      let teachersData = await getAllTeachers(teachersPerPage);
      setTeachers(teachersData);
    };
    getTeachersData();
  }, [teachersPerPage]);

  const handleShowMore = () => {
    setTeachersPerPage((prev) => (prev += 4));
  };

  return (
    <>
      <List>
        {teachers?.map((teach, index) => (
          <TeacherItem key={index} teach={teach} />
        ))}
      </List>
      <ShowMoreBtn type="button" onClick={handleShowMore}>
        Show more
      </ShowMoreBtn>
    </>
  );
};

export default ListTeachers;
