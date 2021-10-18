import React, { useState } from "react";
import { getNewPatient } from "../../api/index";
import styled from "styled-components";
import Button from "../styled/Button";

const StyledNewPatient = styled.p`
  padding: 20px;
  font-weight: bold;
`;

const RegisterPatient = () => {
  const [newPatient, setNewPatient] = useState("Ingen patient är skapad");

  const handleEvent = async () => {
    const newPatientName = await getNewPatient();
    console.log(newPatientName.data);
    setNewPatient(`Patient skapad, namn: ${newPatientName.data}`);
  };

  return (
    <>
      <Button onClick={handleEvent}>Registrera ny patient</Button>
      <StyledNewPatient>{newPatient}</StyledNewPatient>
    </>
  );
};

export default RegisterPatient;
