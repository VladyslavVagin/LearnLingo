// @ts-nocheck
import React from 'react'
import { AddInfoContainer } from './ReadMoreInfo.styled'
import Reviews from './Reviews/Reviews'

const ReadMoreInfo = ({reviews, experience, setShowInfo}) => {
  return (
    <AddInfoContainer onClick={() => setShowInfo(false)}>
        <p>{experience}</p>
        <Reviews reviews={reviews}/>
    </AddInfoContainer>
  )
}

export default ReadMoreInfo