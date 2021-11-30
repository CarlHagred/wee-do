import React from "react";
import styled from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import PatientTheme from "../../themes/PatientTheme";
import LoginPatient from "../../components/patient/LoginPatient";
import hero from "../../components/images/patient_login.png";
import HelpLink from "../../components/common/HelpLink";

const StyledBody = createGlobalStyle`
    @media (min-width: 300px) {
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

const StyledContainerItem = styled.div`
  font-size: 20px;
  flex: 1;
`;

const StyledWrapper = styled(StyledContainerItem)`
  display: flex;
  max-width: 802px;
  border: 1px solid #bfc1bf;
  margin-top: 20vh;
  background-color: white;
  @media (max-width: 799px) {
    flex-direction: column;
    max-width: 402px;
    margin-top: 10vh;
  }
  @media (max-width: 400px) {
    margin-top: 0;
    border: 0;
  }
`;

const StyledHeroContainer = styled(StyledContainerItem)`
  display: flex;
  position: relative;
  text-align: center;
  background-color: orange;
  @media (max-width: 540px) {
    margin-top: 0;
  }
`;

const StyledHero = styled.img`
  object-fit: cover;
  width: 100%;
  min-height: 100%;
`;

const StyledContentContainer = styled(StyledContainerItem)`
  background: white;
  display: flex;
  flex-direction: column;
  background-color: red;
  align-items: center;
`;

const StyledLoginHeader = styled(StyledContainerItem)`
  font-size: 2rem;
  margin: 40px 0;
  height: 80%;
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

            <HelpLink />
          </StyledContentContainer>
        </StyledWrapper>
      </ThemeProvider>
    </PageWrapper>
  );
};
export default PatientLogin;
