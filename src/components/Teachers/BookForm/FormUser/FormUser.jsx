// @ts-nocheck
import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import {
  WhatReason,
  FieldsGroup,
  RadioBtn,
  Label,
  GroupInputs,
  InputUser,
  BookSubmitBtn,
} from "./FormUser.styled";
import { StyledError } from "../../../Modal/Login/Login.styled";
import { toast } from "react-toastify";

const valuesField = [
  {
    id: 1,
    forLabel: "Career and business",
    forValue: "career",
  },
  {
    id: 2,
    forLabel: "Lesson for kids",
    forValue: "lesson",
  },
  {
    id: 3,
    forLabel: "Living abroad",
    forValue: "living",
  },
  {
    id: 4,
    forLabel: "Exams and coursework",
    forValue: "exams",
  },
  {
    id: 5,
    forLabel: "Culture, travel or hobby",
    forValue: "culture",
  },
];

const FormUser = ({setShowBookModal}) => {
  const initialValues = {
    reason: "",
    name: "",
    email: "",
    phone: "",
  };

  const schema = yup.object().shape({
    reason: yup.string().required(),
    name: yup.string().min(5).max(24).required(),
    email: yup.string().email().required(),
    phone: yup.string().min(9).max(12).required(),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          if (values) {
            setShowBookModal(false);
            toast.success('Thank You, Tutor will contact You soon!');
          }
        }}
      >
        <Form>
          <WhatReason>
            What is your main reason for learning English?
          </WhatReason>
          <FieldsGroup>
            {valuesField.map((vl) => {
              return (
                <Label key={vl.id} htmlFor="reason">
                  <RadioBtn type="radio" name="reason" value={vl.forValue} />
                  {vl.forLabel}
                </Label>
              );
            })}
            <StyledError name="reason" component="div" />
          </FieldsGroup>
          <GroupInputs>
            <InputUser
              type="text"
              name="name"
              placeholder="Full Name"
              required
              aria-label="Input for typing Full Name"
            />
            <StyledError name="name" component="div" />
            <InputUser
              type="email"
              name="email"
              placeholder="Email"
              required
              aria-label="Input for typing Email"
            />
            <StyledError name="email" component="div" />
            <InputUser
              type="tel"
              name="phone"
              placeholder="Phone number"
              required
              aria-label="Input for typing phone number"
            />
            <StyledError name="phone" component="div" />
          </GroupInputs>
          <BookSubmitBtn type="submit" aria-label="Send Book Lesson form">
            Book
          </BookSubmitBtn>
        </Form>
      </Formik>
    </>
  );
};

export default FormUser;
