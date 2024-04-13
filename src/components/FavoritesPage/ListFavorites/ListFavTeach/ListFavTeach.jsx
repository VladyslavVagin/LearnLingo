import React from 'react'
import TeacherItem from '../../../Teachers/TeacherItem/TeacherItem';
import { List, ShowMoreBtn } from "../../../Teachers/ListTeachers/ListTeachers.styled";

const ListFavTeach = ({setFavoritesPerPage, favorites}) => {

    const handleShowMore = () => {
        setFavoritesPerPage((prev) => (prev += 4));
      };

  return (
    <>
      <List>
        {favorites?.map((teach, index) => (
          <TeacherItem key={index} teach={teach} />
        ))}
      </List>
      <ShowMoreBtn type="button" onClick={handleShowMore}>
        Show more
      </ShowMoreBtn>
    </>
  )
}

export default ListFavTeach