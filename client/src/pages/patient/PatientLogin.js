import React from "react";
import PlaceHolder from "../../components/common/PlaceHolder";
import PatientLayout from "../../components/patient/PatientLayout";
import LoginPatient from "../../components/Login/LoginPatient";

const PatientLogin = () => {
  return (
    <PatientLayout>
      <PlaceHolder />
      <LoginPatient />
    </PatientLayout>
  );
};

export default PatientLogin;
