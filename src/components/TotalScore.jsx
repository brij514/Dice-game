import React from "react";
import styled from "styled-components";
const TotalScore = ({score}) => {
  return (
    <main>
      <ScoreContainer>
        <h1>{score}</h1>
        <p>TotalScore</p>
      </ScoreContainer>
    </main>
  );
};
export  default TotalScore ;
const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;
/* background-color: red; */
justify-content: center;
  h1 {
    font-size: 100px;
    line-height:100px;
  }
  p{
    font-size: 24px;
    font-weight: 500;
  }
`;
