// @ts-nocheck
import React, { useEffect } from "react";
import { BtnIcon, BurgerBtnContainer, Button } from "./BurgerBtn.styled";

const BurgerBtn = ({ isShowMobile, setIsShowMobile }) => {
  useEffect(() => {
    if (isShowMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isShowMobile]);

  return (
    <BurgerBtnContainer>
      <Button type="button" onClick={() => setIsShowMobile((prev) => !prev)}>
        <BtnIcon isShowMobile={isShowMobile}></BtnIcon>
      </Button>
    </BurgerBtnContainer>
  );
};

export default BurgerBtn;
