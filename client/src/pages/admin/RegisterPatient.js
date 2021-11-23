import React, { useState } from "react";
import styled from "styled-components";

import { getNewPatient } from "../../api/index";

import Button from "../../components/common/Button";
import ContentContainer from "../../components/common/ContentContainer";

const StyledNewPatient = styled.p`
  padding: 20px;
  font-weight: bold;
  color: rgb(82, 152, 80, 100%);
  text-align: center;
`;

const RegisterPatient = () => {
  const [newPatient, setNewPatient] = useState("");

  const handleEvent = async () => {
    const newPatientName = await getNewPatient();
    console.log(newPatientName.data);
    setNewPatient(`Patient skapad med ID:${newPatientName.data}`);
  };

  return (
    <ContentContainer>
      <Button onClick={handleEvent}>Registrera ny patient</Button>
      <StyledNewPatient>{newPatient}</StyledNewPatient>
    </ContentContainer>
  );
};

export default RegisterPatient;
