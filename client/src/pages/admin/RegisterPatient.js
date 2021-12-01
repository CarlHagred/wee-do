import React, { useState } from "react";
import styled from "styled-components";

import { getNewPatient } from "../../api/index";

import AdminLayout from "../../components/admin/AdminLayout";
import Button from "../../components/common/Button";
import ContentContainer from "../../components/common/ContentContainer";
import Icon from "../../components/common/Icons";

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
  font-size: 2em;
  text-align: center;
`;

const RegisterPatient = () => {
  const [newPatient, setNewPatient] = useState("");

  const handleEvent = async () => {
    const newPatientName = await getNewPatient();
    console.log(newPatientName.data);
    setNewPatient(newPatientName.data);
  };

  return (
    <AdminLayout>
      <ContentContainer>
        <RegisterContainer>
          <StyledHeader>Registrera patient</StyledHeader>

          <NewPatientContainer>
            {newPatient && "Nytt användarnamn:"}
            <StyledNewPatient>{newPatient}</StyledNewPatient>
          </NewPatientContainer>
          <Button icon="add_user" onClick={handleEvent}>
            Skapa användarnamn
          </Button>
        </RegisterContainer>
      </ContentContainer>
    </AdminLayout>
  );
};

export default RegisterPatient;
