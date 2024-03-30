// @ts-nocheck
import React, { useRef } from "react";
import sprite from "../../icons/icons.svg";
import { Backdrop, CloseBtn, FormModal } from "./Modal.styled";

const Modal = ({ children, setShowLogin, setShowRegister }) => {
  const backdropRef = useRef(null);

  const handleClose = () => {
    setShowLogin && setShowLogin(false);
    setShowRegister && setShowRegister(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) {
      setShowLogin && setShowLogin(false);
      setShowRegister && setShowRegister(false);
    }
  };

  return (
    <Backdrop ref={backdropRef} onClick={handleBackdropClick}>
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
