// @ts-nocheck
import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Modal from "../Modal";
import { FormTitleContainer } from "./Login.styled";

const initialValues = {
  email: "",
  password: "",
};

const patternEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,20}$/;

const schema = yup.object().shape({
  email: yup.string().min(5).required(),
  password: yup.string().min(6).max(16).required(),
});

const Login = ({ setShowLogin }) => {
  const handleSubmit = (dataForm, { resetForm }) => {
    console.log(dataForm);
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
        <Form>
          <Field
            type="email"
            name="email"
            placeholder="Email"
            pattern={patternEmail}
            required
            aria-label="Input for type your email"
          />
          <label htmlFor="password">
            <Field
              type="password"
              name="password"
              placeholder="Password"
              pattern={passwordPattern}
              required
              aria-label="Input for type your password"
            />
          </label>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default Login;
