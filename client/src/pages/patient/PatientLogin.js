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
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 400px;
  background: white;
  margin: 0 30px;
  @media (max-width: 375px) {
    margin: 0 20px;
  }
`;

const StyledLoginHeader = styled.div`
  font-size: 3rem;
  @media (max-width: 740px) {
    margin-top: 30px;
    margin-bottom: 50px;
    font-size: 2.3rem;
  }
`;

const StyledHelp = styled(NavLink)`
  font-size: 1.5em;
  @media (max-width: 740px) {
    margin: 50px 0;
  }
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
