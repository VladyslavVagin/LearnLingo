import React, { useState, useEffect } from "react";
import sprite from "../../../icons/icons.svg";
import { ChangeColorBtn } from "./ColorPicker.styled";

const themes = ["theme1", "theme2", "theme3", "theme4", "theme5"];

const ColorPicker = () => {
  const savedThemeIndex = localStorage.getItem('colorpicker');
  const initialThemeIndex = savedThemeIndex ? parseInt(savedThemeIndex) : 0;
  const [currentThemeIndex, setCurrentThemeIndex] = useState(initialThemeIndex);

  const changeTheme = () => {
    const newThemeIndex = (currentThemeIndex + 1) % themes.length;
    setCurrentThemeIndex(newThemeIndex);
    localStorage.setItem("colorpicker", String(newThemeIndex));
    document.documentElement.setAttribute(
      "data-theme",
      themes[currentThemeIndex]
    );
  };

  useEffect(() => {
    if(savedThemeIndex) {
      setCurrentThemeIndex(parseInt(savedThemeIndex));
      document.documentElement.setAttribute("data-theme", themes[parseInt(savedThemeIndex)]);
    } else {
      setCurrentThemeIndex(0);
      document.documentElement.setAttribute("data-theme", themes[0]);
    }
  }, [savedThemeIndex]);

  return (
    <div>
      <ChangeColorBtn type="button" onClick={changeTheme}>
        <svg width={26} height={26}>
          <use xlinkHref={`${sprite}#icon-palette`}></use>
        </svg>
      </ChangeColorBtn>
    </div>
  );
};

export default ColorPicker;
