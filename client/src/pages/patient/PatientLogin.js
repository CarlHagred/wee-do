import React from "react";
import styled from "styled-components";

import PatientLayout from "../../components/patient/PatientLayout";
import LoginPatient from "../../components/Login/LoginPatient";
import hero from "../../components/images/patient_hero.png";

const StyledHero = styled.div`
  background-image: url(${hero});
  margin: -1rem -1rem 0 -1rem;
  background-image: url(${hero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

const StyledHeader = styled.h1`
  font-size: 2em;
  margin: 40px 0;
  text-align: center;
`;

const LoginWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: 10rem;
    background-color: white;
    border: 1px solid #bfc1bf;
    height: 420px;
    width: 800px;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 0 20px;
    width: 400px;
  }
`;

const PatientLogin = () => {
  return (
    <PatientLayout>
      <LoginWrapper>
        <StyledHero />
        <LoginContainer>
          <StyledHeader>Logga in</StyledHeader>
          <LoginPatient />
        </LoginContainer>
      </LoginWrapper>
    </PatientLayout>
  );
};

export default PatientLogin;
