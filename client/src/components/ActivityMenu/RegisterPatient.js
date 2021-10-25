import React, { useState } from "react";
import { getNewPatient } from "../../api/index";
import styled from "styled-components";
import Button from "../styled/Button";

const StyledNewPatient = styled.p`
  padding: 10px;
  text-align: center;
  border:1px; 
  border-radius: 5px;
  border-style:solid; 
  border-color: white;
  background-color: rgb(177, 238, 156, 100%);
`;

const RegisterPatient = () => {
  const [newPatient, setNewPatient] = useState("");

  const handleEvent = async () => {
    const newPatientName = await getNewPatient();
    console.log(newPatientName.data);
    setNewPatient(`${newPatientName.data}`);
  };

  return (
    <>
      <Button onClick={handleEvent}>Registrera ny patient</Button>
      <StyledNewPatient>Ny patient registrerad med ID: <br></br><br></br>{newPatient}</StyledNewPatient>
    </>
  );
};

export default RegisterPatient;
