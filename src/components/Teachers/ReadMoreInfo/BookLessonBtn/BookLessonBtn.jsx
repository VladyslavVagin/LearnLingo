// @ts-nocheck
import React from "react";
import { BookBtn } from "./BookLessonBtn.styled";
import { toast } from "react-toastify";

const BookLessonBtn = ({ setShowBookModal }) => {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLogin")) || false;

  const handleClick = () => {
    if (isLoggedIn) {
      setShowBookModal(true);
    } else {
      toast.warn("Please, LOG IN first");
    }
  };

  return (
    <BookBtn type="button" onClick={handleClick}>
      Book trial lesson
    </BookBtn>
  );
};

export default BookLessonBtn;
