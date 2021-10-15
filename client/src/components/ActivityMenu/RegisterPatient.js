import React, { useState } from "react";
import { getNewPatient } from "../../api/index";

const RegisterPatient = () => {
  const [newPatient, setNewPatient] = useState("Ingen patient är skapad");

  const handleEvent = async () => {
    const newPatientName = await getNewPatient();
    console.log(newPatientName.data);
    setNewPatient(`Patient skapad, namn: ${newPatientName.data}`);
  };

  return (
    <div>
      <button onClick={handleEvent}>Registrera ny patient</button>
      <p>{newPatient}</p>
    </div>
  );
};

export default RegisterPatient;
