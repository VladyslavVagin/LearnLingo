import React from "react";
import { LevelsList } from "./Levels.styled";

const Levels = ({ levels, lvl }) => {
  return (
    <LevelsList>
      {levels.map((level, index) => (
        <li key={index} style={{ backgroundColor: level === lvl ? "var(--accent-color)" : "transparent", border: level === lvl ? "var(--accent-color)" : "rgba(18, 20, 23, 0.2)"}}>#{level}</li>
      ))}
    </LevelsList>
  );
};

export default Levels;
