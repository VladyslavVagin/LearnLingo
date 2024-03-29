import React from 'react'
import sprite from "../../../icons/icons.svg"
import { LogoLink } from './Logo.styled'

const Logo = () => {
  return (
    <div>
        <LogoLink to={'/home'}>
             <svg width={28} height={28}>
              <use xlinkHref={`${sprite}#icon-ukraine`}></use>
             </svg>
            <p >LearnLingo</p>
        </LogoLink>
    </div>
  )
}

export default Logo