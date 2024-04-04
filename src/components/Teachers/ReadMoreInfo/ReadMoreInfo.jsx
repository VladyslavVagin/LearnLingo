import React from 'react'
import { AddInfoContainer } from './ReadMoreInfo.styled'

const ReadMoreInfo = ({reviews, experience, setShowInfo}) => {
    console.log(reviews)

  return (
    <AddInfoContainer onClick={() => setShowInfo(false)}>
        <p>{experience}</p>
    </AddInfoContainer>
  )
}

export default ReadMoreInfo