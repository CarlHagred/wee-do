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
  flex: 1.2;
`;

const HeroRight = styled.div`
  @media (min-width: 1020px) {
    background-image: linear-gradient(
        0.25turn,
        #f5e6cf 0%,
        rgba(255, 239, 213, 0.1) 15% 100%
      ),
      url(${hero});
    background-repeat: no-repeat;
    background-position: 50% 50%;
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
  @media (min-width: 520px) {
    font-size: 4em;
    margin: 110px auto;
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
`;

const PatientPanel = () => {
  return (
    <PatientLayout>
      <StyledBody />
      <HeroWrapper>
        <HeroLeft>
          <HeaderContainer>
            <StyledHeroHeader>Välkommen!</StyledHeroHeader>
          </HeaderContainer>
          <PanelButtonContainer>
            <PanelButton to="/todo" icon="gym_user" size="44">
              Mina övningar
            </PanelButton>
            <PanelButton to="/statistics" icon="statistics" size="44">
              Se statistik
            </PanelButton>
          </PanelButtonContainer>
        </HeroLeft>

        <HeroRight />
      </HeroWrapper>
    </PatientLayout>
  );
};
export default PatientPanel;
