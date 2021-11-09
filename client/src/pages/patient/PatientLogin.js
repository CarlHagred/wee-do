import React from "react";
import styled from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import PatientTheme from "../../themes/PatientTheme";
import LoginPatient from "../../components/Login/LoginPatient";
import WdLogo from "../../components/images/WdLogo";
import RsLogo from "../../components/images/RsLogo";
import hero from "../../components/images/patient_hero.png";

const StyledBody = createGlobalStyle`
  @media (min-width: 740px) {
    body {
    background-color: #F9F9F9;
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

const StyledHeroContainer = styled(StyledContainerItem)`
  display: flex;
  position: relative;
  text-align: center;
  @media (max-width: 740px) {
    margin-top: 0;
  }
`;

const StyledLogo = styled(WdLogo)`
  width: 60%;
  position: absolute;
  top: 10px;
  left: 16px;
`;

const StyledHero = styled.img`
  object-fit: cover;
  width: 100%;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const StyledContentContainer = styled(StyledContainerItem)`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
`;

const StyledLoginHeader = styled(StyledContainerItem)`
  font-size: 2rem;
  margin: 40px 0;
`;

const StyledLoginFooter = styled(StyledContainerItem)`
  margin-top: 40px;
  margin-bottom: 20px;
`;

const PatientLogin = () => {
  return (
    <PageWrapper>
      <StyledBody />
      <ThemeProvider theme={PatientTheme}>
        <StyledWrapper>
          <StyledHeroContainer>
            <StyledHero src={hero} />
            <StyledLogo fill="black" />
          </StyledHeroContainer>

          <StyledContentContainer>
            <StyledLoginHeader>Logga in</StyledLoginHeader>

            <StyledContainerItem>
              <LoginPatient />
            </StyledContainerItem>

            <StyledLoginFooter>
              <RsLogo width="92px" height="85px" alt="Region Skånes logotyp" />
            </StyledLoginFooter>
          </StyledContentContainer>
        </StyledWrapper>
      </ThemeProvider>
    </PageWrapper>
  );
};
export default PatientLogin;
