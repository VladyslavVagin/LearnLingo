// @ts-nocheck
import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Modal from "../Modal";
import sprite from "../../../icons/icons.svg";
import {
  FormTitleContainer,
  Label,
  StyledField,
  StyledForm,
  SubmitBtn,
  StyledError
} from "./Login.styled";
import { whenUserLogin } from "../../../firebase/api";

const initialValues = {
  email: "",
  password: "",
};

const patternEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).max(16).required(),
});

const Login = ({ setShowLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = (dataForm, { resetForm }) => {
    whenUserLogin(dataForm, setShowLogin);
    resetForm();
  };

  return (
    <Modal setShowLogin={setShowLogin}>
      <FormTitleContainer>
        <h2>Log In</h2>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
      </FormTitleContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledField
            type="email"
            name="email"
            placeholder="Email"
            pattern={patternEmail}
            required
            aria-label="Input for type your email"
          />
           <StyledError name="email" component="div" />
          <Label htmlFor="password">
            <StyledField
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              aria-label="Input for type your password"
            />
            <div onClick={handleShowPassword}>
              <svg width={20} height={20}>
                <use
                  xlinkHref={
                    showPassword
                      ? `${sprite}#icon-eye`
                      : `${sprite}#icon-eye-off`
                  }
                ></use>
              </svg>
            </div>
          </Label>
          <StyledError name="password" component="div" />
          <SubmitBtn type="submit">Log In</SubmitBtn>
        </StyledForm>
      </Formik>
    </Modal>
  );
};

export default Login;
