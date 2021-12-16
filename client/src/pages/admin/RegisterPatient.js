import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { useHistory } from "react-router-dom";

import { getNewPatient } from "../../api/index";

import AdminLayout from "../../components/admin/AdminLayout";
import Button from "../../components/common/Button";
import ContentContainer from "../../components/common/ContentContainer";

const StyledNewUsername = styled.p`
  animation: 2s ${keyframes`${fadeIn}`};
`;

const StyledButton = styled(Button)`
  animation: 2s ${keyframes`${fadeIn}`};
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
`;

const StyledHeader = styled.h1`
  font-size: 3em;
  color: #007ab3;
`;

const NewPatientContainer = styled.div`
  height: 50px;
`;

const StyledNewPatient = styled.p`
  animation: 2s ${keyframes`${fadeIn}`};
  font-size: 2em;
  text-align: center;
`;

const RegisterPatient = () => {
  const [newPatient, setNewPatient] = useState("");
  const [button, setButton] = useState(false)

  let history = useHistory();

  const handleEvent = async () => {
    const newPatientName = await getNewPatient();
    console.log(newPatientName.data);
    setNewPatient(newPatientName.data);
    setButton(true)
  };

  const routeChange = () => {
    
    let path = "http://localhost:3000/admin/statistics/" + newPatient
    window.location = path
  }
  
  return (
    <AdminLayout>
      <ContentContainer>
        <RegisterContainer>
          <StyledHeader>Registrera patient</StyledHeader>

          <NewPatientContainer>
            {newPatient && (
              <StyledNewUsername>Nytt användarnamn:</StyledNewUsername>
            )}
            {newPatient && <StyledNewPatient>{newPatient}</StyledNewPatient>}
          </NewPatientContainer>
          <Button icon="add_user" onClick={handleEvent}>
            Skapa användarnamn
          </Button>
          {button === true ?
          <StyledButton onClick={routeChange}>
              Välj övningar till patient
          </StyledButton>
          :
          null }
        </RegisterContainer>
      </ContentContainer>
    </AdminLayout>
  );
};

export default RegisterPatient;
