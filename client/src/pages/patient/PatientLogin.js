import React from "react";
import styled from "styled-components";

import PatientLayout from "../../components/patient/PatientLayout";
import LoginPatient from "../../components/Login/LoginPatient";
import hero from "../../components/images/patient_hero.png";

const StyledHero = styled.div`
  margin: -1rem -1rem 2rem -1rem;
`;

const PatientLogin = () => {
  return (
    <PatientLayout>
      <StyledHero>
        <img src={hero} alt="WeeDo" width="100%" />
      </StyledHero>
      <LoginPatient />
    </PatientLayout>
  );
};

export default PatientLogin;
