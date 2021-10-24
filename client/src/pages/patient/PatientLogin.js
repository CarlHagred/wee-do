import React from "react";
import Button from "../../components/common/Button";
import PlaceHolder from "../../components/common/PlaceHolder";
import PatientLayout from "../../components/patient/PatientLayout";

const PatientLogin = () => {
  return (
    <PatientLayout>
      <PlaceHolder />
      <h2>Logga in</h2>
      <br />
      <Button>Logga in här</Button>
    </PatientLayout>
  );
};

export default PatientLogin;
