import React from 'react'
import Select from "react-select";
import { SearchContainer, LabelSelect, SelectContainer } from './SelectLanguage.styled';

const SelectLanguage = () => {
  return (
    <SearchContainer>
    <SelectContainer>
      <LabelSelect htmlFor="langs">Languages</LabelSelect>
      <Select
        // options={prices}
        placeholder={"Language"}
        maxMenuHeight={272}
        isClearable={true}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "none",
            width: "185px",
            height: "48px",
            background: "#fff",
            borderRadius: "14px",
            fontSize: "18px",
            fontWeight: "500",
            color: "#121417",
            fontFamily: "Roboto",
            cursor: "pointer",
          }),
          placeholder: (baseStyles, state) => ({
            ...baseStyles,
            color: "#121417",
            fontSize: "18px",
            fontWeight: "500",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            border: "none",
            fontSize: "18px",
            fontWeight: "500",
            fontFamily: "Roboto",
            lineHeight: "1.11111",
            color: state.isFocused
              ? "rgba(18, 20, 23, 0.938)"
              : "rgba(18, 20, 23, 0.2)",
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            borderRadius: "14px",
            boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
          }),
        }}
      />
    </SelectContainer>
  </SearchContainer>
  )
}

export default SelectLanguage