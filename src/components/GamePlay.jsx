import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button } from "../styled/Button";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [CurrentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
     
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice CurrentDice={CurrentDice} roleDice={roleDice} />
      <div className="btns">
        <Button>Reset</Button>
        <Button>Show Rules</Button>
      </div>
    </MainContainer>
  );
};

export default GamePlay;
const MainContainer = styled.div`
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btns{
    display: flex;
    flex-direction: column;
    max-width: 220px;
    margin: 0 auto;
    gap: 24px;
  }
  padding-top: 70px;
  max-width: 1280px;
  margin: 0 auto;
`;
