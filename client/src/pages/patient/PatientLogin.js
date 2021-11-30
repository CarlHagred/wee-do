import React from "react";
import styled from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import PatientTheme from "../../themes/PatientTheme";
import LoginPatient from "../../components/patient/LoginPatient";
import hero from "../../components/images/patient_login.png";
import HelpLink from "../../components/common/HelpLink";

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

const ContentWrapper = styled.div`
  display: flex;
  border: 1px solid #bfc1bf;
  margin-top: 20vh;
  background-color: white;
  font-size: 20px;
  align-items: center;
  @media (max-width: 740px) {
    flex-direction: column;
    margin-top: 0;
    border: 0;
  }
`;

const HeroContainer = styled.div`
  width: 535px;
  height: 400px;
  background-color: red;
  @media (max-width: 740px) {
    width: 100vw;
  }
`;

const LoginContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

const StyledLoginHeader = styled.div`
  font-size: 2rem;
  margin: 40px 0;
  height: 80%;
`;

const PatientLogin = () => {
  return (
    <PageWrapper>
      <StyledBody />

      <ThemeProvider theme={PatientTheme}>
        <ContentWrapper>
          <HeroContainer />

          <LoginContainer>
            <StyledLoginHeader>Logga in</StyledLoginHeader>

            <LoginPatient />

            <HelpLink />
          </LoginContainer>
        </ContentWrapper>
      </ThemeProvider>
    </PageWrapper>
  );
};
export default PatientLogin;
