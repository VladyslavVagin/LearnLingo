import React from "react";
import { TitleContainer, Title, TitleText, GetStartedBtn } from "./MainTitle.styled";

const MainTitle = () => {
  return (
    <TitleContainer>
      <Title>
        Unlock your potential with the best <span>language</span> tutors
      </Title>
      <TitleText>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </TitleText>
      <GetStartedBtn to={'/teachers'}>Get started</GetStartedBtn>
    </TitleContainer>
  );
};

export default MainTitle;
