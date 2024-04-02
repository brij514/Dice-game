import React, { useState } from "react";
import styled from "styled-components";

const RoleDice = ({ roleDice, CurrentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${CurrentDice}.png`} alt="dice_1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  align-items: center;
  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
  /* background-color: red; */
`;
