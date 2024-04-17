// @ts-nocheck
import React from "react";
import { InfoTeacher, Paragraph, TitleForm } from "./BookForm.styled";
import FormUser from "./FormUser/FormUser";

const BookForm = ({ name, surname, avatar_url, setShowBookModal }) => {
  return (
    <div>
      <TitleForm>Book trial lesson</TitleForm>
      <Paragraph>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </Paragraph>
      <InfoTeacher>
        <img src={avatar_url} alt="avatar of teacher" width={44} height={44}/>
        <div>
            <p>Your teacher</p>
            <span>{name} {surname}</span>
        </div>
      </InfoTeacher>
      <FormUser setShowBookModal={setShowBookModal}/>
    </div>
  );
};

export default BookForm;
