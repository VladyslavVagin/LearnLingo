import React from "react";
import { StatsContainer, StatsList } from "./Stats.styled";

const Stats = () => {
  return (
    <StatsContainer>
      <StatsList>
        <li>
          <span>32,000 + </span>
          <p>Experienced <br/> tutors</p>
        </li>
        <li>
          <span>300,000 + </span>
          <p>5 star tutor <br/> reviews</p>
        </li>
        <li>
          <span>120 + </span>
          <p>Subjects <br/> taught</p>
        </li>
        <li>
          <span>200 + </span>
          <p>Tutor <br/> nationalities</p>
        </li>
      </StatsList>
    </StatsContainer>
  );
};

export default Stats;
