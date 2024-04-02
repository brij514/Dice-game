import styled from "styled-components";

export const Button = styled.button`

  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  min-width: 220px;
  height: 44px;
  background-color: black;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  border: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
  /* background-color: red; */
`;

