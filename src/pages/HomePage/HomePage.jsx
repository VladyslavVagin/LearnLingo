import React from "react";
import MainTitle from "../../components/HomePage/MainTitle/MainTitle";
import ImagePart from "../../components/HomePage/ImagePart/ImagePart";
import Stats from "../../components/HomePage/Stats/Stats";
import { HomePageContainer, UpperContainer } from "./HomePage.styled";

const HomePage = () => {
  return (
    <HomePageContainer>
      <UpperContainer>
        <MainTitle />
        <ImagePart />
      </UpperContainer>
      <Stats />
    </HomePageContainer>
  );
};

export default HomePage;
