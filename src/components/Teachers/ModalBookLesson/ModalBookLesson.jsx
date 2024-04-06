// @ts-nocheck
import React, { useRef } from "react";
import { createPortal } from "react-dom";
import sprite from "../../../icons/icons.svg";
import { Backdrop, CloseBtn, FormModal } from "../../Modal/Modal.styled";

const ModalBookLesson = ({ children, setShowBookModal }) => {
  const modalRoot = document?.getElementById("modal-root");
  const backdropRef = useRef(null);

  const handleClose = () => {
    setShowBookModal(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) {
      setShowBookModal(false);
    }
  };

  return (
    <>
      {createPortal(
        <Backdrop ref={backdropRef} onClick={handleBackdropClick}>
          <FormModal>
            <CloseBtn type="button" onClick={handleClose}>
              <svg width={32} height={32}>
                <use xlinkHref={`${sprite}#icon-close`}></use>
              </svg>
            </CloseBtn>
            {children}
          </FormModal>
        </Backdrop>,
        modalRoot
      )}
    </>
  );
};

export default ModalBookLesson;
