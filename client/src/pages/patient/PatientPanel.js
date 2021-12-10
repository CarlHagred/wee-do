import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import PatientLayout from "../../components/patient/PatientLayout";
import PanelButton from "../../components/common/PanelButton";
import hero from "../../components/images/hero.jpg";

const StyledBody = createGlobalStyle`
      body {
      background-color: #F5E6CF;
    }
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const HeroLeft = styled.div`
  flex: 1;
`;

const HeroRight = styled.div`
  @media (min-width: 700px) {
    background-image: linear-gradient(
        0.25turn,
        #f5e6cf,
        5%,
        rgba(255, 239, 213, 0.1)
      ),
      url(${hero});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 80vh;
    flex: 1;
  }
`;

const HeaderContainer = styled.div`
  text-align: center;
`;

const StyledHeroHeader = styled.h1`
  font-size: 2.8em;
  margin: 10% auto;
  @media (min-width: 700px) {
    font-size: 4em;
    margin: 110px auto;
    position: absolute;
    top: 20%;
    left: 25%;
    transform: translate(-20%, -20%);
  }
`;

const PanelButtonContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
  align-items: center;
  padding-bottom: 10%;
  justify-content: center;
  @media (min-width: 700px) {
    position: absolute;
    top: 70%;
    left: 20%;
    transform: translate(-20%, -50%);
  }
`;

const PatientPanel = () => {
  return (
    <PatientLayout>
      <StyledBody />
      <HeroWrapper>
        <HeroLeft />
        <HeroRight />
        <HeaderContainer>
          <StyledHeroHeader>Välkommen!</StyledHeroHeader>

          <PanelButtonContainer>
            <PanelButton to="/QrScanner" icon="qrcode" size="44">
              Scanna övning
            </PanelButton>
            <PanelButton to="/statistics" icon="statistics" size="44">
              Se statistik
            </PanelButton>
          </PanelButtonContainer>
        </HeaderContainer>
      </HeroWrapper>
    </PatientLayout>
  );
};
export default PatientPanel;
