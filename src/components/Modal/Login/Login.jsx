// @ts-nocheck
import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/usersSlice";
import { auth } from "../../../firebase/firebase";
import Modal from "../Modal";
import sprite from "../../../icons/icons.svg";
import { FormTitleContainer, Label, StyledField, StyledForm, SubmitBtn, ErrorContainer } from "./Login.styled";

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
  const [errorLogin, setErrorLogin] = useState(null);
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser({id: user.uid, name: user.displayName, email: user.email}));
    } else {
      dispatch(setUser(null));
    }
  });

  const handleShowPassword = () => setShowPassword(prev => !prev);

  const handleSubmit = (dataForm, { resetForm }) => {
    signInWithEmailAndPassword(auth, dataForm.email, dataForm.password).catch(error => {
      console.log(error);
      setErrorLogin(error.message);
    });
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
                <use xlinkHref={showPassword ? `${sprite}#icon-eye` : `${sprite}#icon-eye-off`}></use>
              </svg>
            </div>
          </Label>
          <SubmitBtn type="submit">Log In</SubmitBtn>
          <ErrorContainer>{errorLogin}</ErrorContainer>
        </StyledForm>
      </Formik>
    </Modal>
  );
};

export default Login;
