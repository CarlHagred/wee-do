import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import PatientTheme from "../../themes/PatientTheme";
import LoginPatient from "../../components/Login/LoginPatient";
import WdLogo from "../../components/images/WdLogo";
import RsLogo from "../../components/images/RsLogo";
import hero from "../../components/images/patient_hero.png";

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
`;

const StyledHeroContainer = styled(StyledContainerItem)`
  display: flex;
  position: relative;
  text-align: center;
`;

const StyledLogo = styled(WdLogo)`
  width: 60%;
  position: absolute;
  top: 10px;
  left: 16px;
`;

const StyledHero = styled.img`
  object-fit: cover;
  width: 378px;
`;

const StyledContentContainer = styled(StyledContainerItem)`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
`;

const StyledLoginHeader = styled(StyledContainerItem)`
  font-size: 2em;
  margin: 40px 0;
`;

const StyledLoginFooter = styled(StyledContainerItem)`
  margin-top: 40px;
  margin-bottom: 20px;
`;

const PatientLogin = () => {
  return (
    <PageWrapper>
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
