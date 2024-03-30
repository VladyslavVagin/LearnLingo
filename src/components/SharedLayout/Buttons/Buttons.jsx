// @ts-nocheck
import React from 'react'
import sprite from '../../../icons/icons.svg'
import { ButtonsContainer, LogoutBtn, RegisterBtn } from './Buttons.styled'

const Buttons = ({setShowLogin, setShowRegister}) => {

  const handleLoginClick = () => {
    setShowLogin(true);
  }

  const handleRegistration = () => {
    setShowRegister(true);
  }

  return (
    <ButtonsContainer>
        <LogoutBtn type='button' onClick={handleLoginClick}>
          <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-log-out`}></use>
          </svg>
          <p>Log in</p>
        </LogoutBtn>
      <RegisterBtn type='button' onClick={handleRegistration}>Registration</RegisterBtn>
    </ButtonsContainer>
  )
}

export default Buttons