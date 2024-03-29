import React from 'react'
import sprite from '../../../icons/icons.svg'
import { LogoutBtn } from './Buttons.styled'

const Buttons = () => {
  return (
    <div>
        <LogoutBtn>
          <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-log-out`}></use>
          </svg>
          <p>Log in</p>
        </LogoutBtn>
    </div>
  )
}

export default Buttons