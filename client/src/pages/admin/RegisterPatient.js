import React, { useState } from "react";
import { getNewPatient } from "../../api/index";
import AdminLayout from "../../components/admin/AdminLayout";
import styled from "styled-components";
import Button from "../../components/common/Button";

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
    <AdminLayout>
      <Button onClick={handleEvent}>Registrera ny patient</Button>
      <StyledNewPatient>{newPatient}</StyledNewPatient>
    </AdminLayout>
  );
};

export default RegisterPatient;
