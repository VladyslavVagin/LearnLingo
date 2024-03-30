import React from "react";
import sprite from "../../icons/icons.svg";
import { Backdrop, CloseBtn, FormModal } from "./Modal.styled";

const Modal = ({ children, setShowLogin, setShowRegister }) => {

    const handleClose = () => {
       setShowLogin && setShowLogin(false);
       setShowRegister && setShowRegister(false);
    }

  return (
    <Backdrop>
      <FormModal>
        <CloseBtn type="button" onClick={handleClose}>
            <svg width={32} height={32}>
             <use xlinkHref={`${sprite}#icon-close`}></use>
            </svg>
        </CloseBtn>
        {children}
      </FormModal>
    </Backdrop>
  );
};

export default Modal;
