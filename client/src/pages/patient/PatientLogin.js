import React from "react";
import PlaceHolder from "../../components/common/PlaceHolder";
import PatientLayout from "../../components/patient/PatientLayout";
import LoginPatient from "../../components/Login/LoginPatient";


const PatientLogin = () => {
  return (
    <PatientLayout>
      <PlaceHolder />
      <LoginPatient />
      <h2>Logga in</h2>
      <br />
    </PatientLayout>
  );
};

export default PatientLogin;
