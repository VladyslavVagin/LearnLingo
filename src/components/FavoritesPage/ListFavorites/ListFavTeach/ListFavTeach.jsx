import React from "react";
import TeacherItem from "../../../Teachers/TeacherItem/TeacherItem";
import {
  List,
  ShowMoreBtn,
} from "../../../Teachers/ListTeachers/ListTeachers.styled";

const ListFavTeach = ({ favorites }) => {
  return (
    <>
      <List>
        {favorites?.length > 0 && favorites?.map((teach, index) => (
          <TeacherItem key={index} teach={teach} />
        ))}
      </List>
      {favorites?.length > 4 && (<ShowMoreBtn type="button">Show more</ShowMoreBtn>)}
    </>
  );
};

export default ListFavTeach;
