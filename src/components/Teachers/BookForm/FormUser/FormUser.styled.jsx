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

  ::before {
    content: "";
    position: absolute;
    z-index: 5;
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    background-color: var(--accent-color);
  }

  &:checked ::before {
         transform: scale(1);
  }

  &:focus {
    border: 0.15em solid var(--accent-color);
  }
`;
