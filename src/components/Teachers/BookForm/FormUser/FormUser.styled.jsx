import styled from "styled-components";
import { Field } from "formik";

export const WhatReason = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.33333;
  color: var(--dark-color);
  margin-bottom: 20px;
`;

export const FieldsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 17px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const RadioBtn = styled(Field)`
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid #636366;
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  outline: none;
  position: relative;

  &::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    background-color: var(--accent-color);
  }

  &:checked::before {
    transform: scale(1);
  }

  &:focus,
  &:checked {
    border: 0.15em solid var(--accent-color);
  }
`;

export const GroupInputs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  margin: 40px 0;
`;

export const InputUser = styled(Field)`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  height: 54px;
  width: 100%;
  padding: 16px 18px;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.375;
    color: var(--dark-color);
  }
`;
