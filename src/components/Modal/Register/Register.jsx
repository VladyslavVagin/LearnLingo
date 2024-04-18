// @ts-nocheck
import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Modal from "../Modal";
import sprite from "../../../icons/icons.svg";
import { FormTitleContainer, Label, StyledField, StyledForm, SubmitBtn, StyledError } from "../Login/Login.styled";
import { whenUserRegister } from "../../../firebase/api";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const schema = yup.object().shape({
  name: yup.string()
    .min(5)
    .max(24)
    .required(),

  email: yup.string()
    .email()
    .required(),

  password: yup.string()
    .min(5)
    .max(16)
    .required(),
});

const Register = ({ setShowRegister }) => {
  const [showPass, setShowPass] = useState(false);

  const handleShowPass = () => setShowPass((prev) => !prev);

  const handleSubmit = (dataForm, { resetForm }) => {
    whenUserRegister(dataForm);
    setShowRegister(false);
    resetForm();
  };

  return (
    <Modal setShowLogin={setShowRegister}>
      <FormTitleContainer>
        <h2>Registration</h2>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
      </FormTitleContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
          <StyledForm>
            <StyledField
              type="text"
              name="name"
              placeholder="Name"
              pattern="^[A-Za-z\s]{1,24}$"
              required
              aria-label="Input for typing your name"
            />
            <StyledError name="name" component="div" />
            
            <StyledField
              type="email"
              name="email"
              placeholder="Email"
              required
              aria-label="Input for typing your email"
            />
            <StyledError name="email" component="div" />
            
            <Label htmlFor="password">
              <StyledField
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                aria-label="Input for typing your password"
              />
              <div onClick={handleShowPass}>
                <svg width={20} height={20}>
                  <use
                    xlinkHref={
                      showPass ? `${sprite}#icon-eye` : `${sprite}#icon-eye-off`
                    }
                  ></use>
                </svg>
              </div>
            </Label>
            <StyledError name="password" component="div" />
            
            <SubmitBtn type="submit">Sign Up</SubmitBtn>
          </StyledForm>
      </Formik>
    </Modal>
  );
};

export default Register;

