import React from "react";
import { BookBtn } from "./BookLessonBtn.styled";

const BookLessonBtn = ({ setShowBookModal }) => {
  return (
    <BookBtn type="button" onClick={() => setShowBookModal(true)}>
      Book trial lesson
    </BookBtn>
  );
};

export default BookLessonBtn;
