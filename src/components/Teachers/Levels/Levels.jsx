import React from "react";
import { LevelsList } from "./Levels.styled";

const Levels = ({ levels }) => {
  return (
    <LevelsList>
      {levels.map((lvl, index) => (
        <li key={index}>#{lvl}</li>
      ))}
    </LevelsList>
  );
};

export default Levels;
