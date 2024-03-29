import React from 'react'
import MainTitle from '../../components/HomePage/MainTitle/MainTitle'
import ImagePart from '../../components/HomePage/ImagePart/ImagePart'
import { HomePageContainer, UpperContainer } from './HomePage.styled'

const HomePage = () => {
  return (
    <HomePageContainer>
      <UpperContainer>
        <MainTitle/>
        <ImagePart/>
      </UpperContainer>
    </HomePageContainer>
  )
}

export default HomePage