import React from 'react'
import sprite from '../../../icons/icons.svg'
import { ButtonsContainer, LogoutBtn, RegisterBtn } from './Buttons.styled'

const Buttons = () => {
  return (
    <ButtonsContainer>
        <LogoutBtn type='button'>
          <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-log-out`}></use>
          </svg>
          <p>Log in</p>
        </LogoutBtn>
      <RegisterBtn type='button'>Registration</RegisterBtn>
    </ButtonsContainer>
  )
}

export default Buttons