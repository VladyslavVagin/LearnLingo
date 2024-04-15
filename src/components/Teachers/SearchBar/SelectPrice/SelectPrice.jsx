import React from "react";
import Select from "react-select";
import { prices } from "../../../../lib/info";
import {
  SearchContainer,
  LabelSelect,
  SelectContainer,
} from "../SelectLanguage/SelectLanguage.styled";

const SelectPrice = ({setPrice}) => {

  const handleChange = (e) => {
    if(e === null) {
      setPrice(null);
     return;
    } else {
      setPrice(e.value);
    }
  };

  return (
    <SearchContainer>
      <SelectContainer>
        <LabelSelect htmlFor="price">Price</LabelSelect>
        <Select
          options={prices}
          placeholder={"$/hour"}
          onChange={handleChange}
          maxMenuHeight={272}
          isClearable={true}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: state.isFocused
                ? "1px solid var(--accent-color)"
                : "1px solid var(--accent-light)",
              outline: "none",
              width: "144px",
              height: "48px",
              background: "#fff",
              borderRadius: "14px",
              fontSize: "18px",
              fontWeight: "500",
              color: "#121417",
              fontFamily: "Roboto",
              cursor: "pointer",
            }),
            placeholder: (baseStyles) => ({
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
              outline: "none",
              color: state.isFocused
                ? "var(--dark-color)"
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
  );
};

export default SelectPrice;
