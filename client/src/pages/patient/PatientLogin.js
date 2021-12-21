import React from "react";
import styled from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import PatientTheme from "../../themes/PatientTheme";
import LoginPatient from "../../components/patient/LoginPatient";
import hero from "../../components/images/patient_login.png";
import { NavLink } from "react-router-dom";

const StyledBody = createGlobalStyle`
    @media (min-width: 740px) {
      body {
      background-color: #EFEFEF;
    }
    }
`;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 800px;
  border: 1px solid #bfc1bf;
  margin-top: 20vh;
  background-color: white;
  @media (max-width: 740px) {
    margin-top: 0;
    flex-direction: column;
    border: 0;
  }
`;

const StyledHeroContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  @media (max-width: 740px) {
    margin-top: 0;
  }
`;

const StyledHero = styled.img`
  object-fit: cover;
  width: 100%;
  min-height: 100%;
`;

const StyledContentContainer = styled.div`
  background: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
  margin-bottom: 8%;
`;

const StyledLoginHeader = styled.div`
  font-size: 2rem;
  margin: 40px 0;
`;

const StyledHelp = styled(NavLink)`
  margin-top: 3em;
  font-size: 1.5em;
`;

const PatientLogin = () => {
  return (
    <PageWrapper>
      <StyledBody />
      <ThemeProvider theme={PatientTheme}>
        <StyledWrapper>
          <StyledHeroContainer>
            <StyledHero src={hero} alt="WeeDo Logotyp" />
          </StyledHeroContainer>

          <StyledContentContainer>
            <StyledLoginHeader>Logga in</StyledLoginHeader>
            <LoginPatient />
            <StyledHelp to="/help">Hjälp</StyledHelp>
          </StyledContentContainer>
        </StyledWrapper>
      </ThemeProvider>
    </PageWrapper>
  );
};
export default PatientLogin;
