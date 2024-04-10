import { Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

export const FormTitleContainer = styled.div`
  text-align: left;
  margin-bottom: 40px;

  h2 {
    font-size: 40px;
    font-size: 500;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
    color: var(--dark-color);
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.375;
    color: var(--form-text);
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
`;

export const StyledField = styled(Field)`
  width: 100%;
  height: 54px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
  outline: none;
  &::placeholder {
    color: var(--dark-color);
    font-size: 16px;
    font-weight: 400;
  }

  &:focus {
    border: 2px solid var(--accent-color);
  }
`;

export const Label = styled.label`
  position: relative;

  div {
    position: absolute;
    top: 17px;
    right: 17px;
    cursor: pointer;
  }
`;

export const SubmitBtn = styled.button`
  outline: none;
  border: none;
  background-color: var(--accent-color);
  border-radius: 12px;
  height: 60px;
  width: 100%;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 700;
  transition: var(--animation-hover);

  &:hover,
  &:focus {
    background-color: var(--accent-light);
  }
`;

export const StyledError = styled(ErrorMessage)`
  font-size: 12px;
  font-weight: 400;
  color: red;
`