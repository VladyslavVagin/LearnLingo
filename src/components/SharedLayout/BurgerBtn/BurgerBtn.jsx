// @ts-nocheck
import React from 'react'
import { BtnIcon, BurgerBtnContainer, Button } from './BurgerBtn.styled'

const BurgerBtn = ({isShowMobile, setIsShowMobile}) => {
    console.log(isShowMobile);
  return (
    <BurgerBtnContainer>
        <Button type='button' onClick={() => setIsShowMobile(prev => !prev)}>
            <BtnIcon isShowMobile={isShowMobile}></BtnIcon>
        </Button>
    </BurgerBtnContainer>
  )
}

export default BurgerBtn