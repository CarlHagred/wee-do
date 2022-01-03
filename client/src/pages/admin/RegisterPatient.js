import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { useHistory } from "react-router-dom";

import { getNewPatient } from "../../api/index";

import AdminLayout from "../../components/admin/AdminLayout";
import Button from "../../components/common/Button";
import TopWrapper from "../../components/common/TopWrapper";

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
  margin-bottom: 3em;
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
  let history = useHistory();
  const [newPatient, setNewPatient] = useState("");
  const [button, setButton] = useState(false);

  const handleEvent = async () => {
    const newPatientName = await getNewPatient();
    console.log(newPatientName.data);
    setNewPatient(newPatientName.data);
    setButton(true);
  };

  const routeChange = () => {
    history.push("/admin/select/" + newPatient);
  };

  return (
    <AdminLayout>
      <TopWrapper header="Registrera patient" />
      <RegisterContainer>
        <NewPatientContainer>
          {newPatient && (
            <StyledNewUsername>Nytt användarnamn:</StyledNewUsername>
          )}
          {newPatient && <StyledNewPatient>{newPatient}</StyledNewPatient>}
        </NewPatientContainer>
        <Button icon="add_user" onClick={handleEvent}>
          Skapa användarnamn
        </Button>
        {button === true ? (
          <StyledButton onClick={routeChange}>
            Välj övningar till patient
          </StyledButton>
        ) : null}
      </RegisterContainer>
    </AdminLayout>
  );
};

export default RegisterPatient;
