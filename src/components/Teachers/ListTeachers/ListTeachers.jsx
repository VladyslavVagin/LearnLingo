// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllTeachers } from "../../../redux/operations";
import { useTeachers } from "../../../hooks/useTeachers";
import TeacherItem from "../TeacherItem/TeacherItem";
import BookLesson from "../BookLesson/BookLesson";
import { List, ShowMoreBtn } from "./ListTeachers.styled";

const ListTeachers = () => {
  const [showBookModal, setShowBookModal] = useState(false);
  const dispatch = useDispatch();
  const { teachers } = useTeachers();
  const teachersPerPage = 4;
  const [shownTeachers, setShownTeachers] = useState(teachers.slice(0, 4));
  const [currentPage, setCurrentPage] = useState(1);

  const handleShowMore = () => {
    setCurrentPage((prev) => (prev += 1));
  };

  useEffect(() => {
    dispatch(fetchAllTeachers());
  }, [dispatch]);

  useEffect(() => {
    setShownTeachers(teachers.slice(0, currentPage * teachersPerPage));
  }, [currentPage, teachers]);

  return (
    <>
     {showBookModal && <BookLesson setShowBookModal={setShowBookModal}/>}
      <List>
        {shownTeachers.map((teach, index) => (
          <TeacherItem
            key={index}
            teach={teach}
            showBookModal={showBookModal}
            setShowBookModal={setShowBookModal}
          />
        ))}
      </List>
      <ShowMoreBtn type="button" onClick={handleShowMore}>
        Show more
      </ShowMoreBtn>
    </>
  );
};

export default ListTeachers;
