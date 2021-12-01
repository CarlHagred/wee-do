import React from "react";
import styled from "styled-components";

import PatientLayout from "../../components/patient/PatientLayout";
import PanelButton from "../../components/common/PanelButton";
import hero from "../../components/images/patient_hero.png";
import WdLogo from "../../components/images/WdLogo";

const StyledHero = styled.div`
  width: 100vw;
  height: 50vh;
  background-image: url(${hero});
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const HeroText = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  @media (max-width: 884px) {
    display: none;
  }
`;

const StyledHeroHeader = styled.h1`
  font-size: 3rem;
  @media (max-width: 1055px) {
    font-size: 2.5rem;
  }
`;

const PanelMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PanelMenu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
  justify-content: center;
`;

const PatientPanel = () => {
  return (
    <PatientLayout>
      <StyledHero>
        <HeroText>
          <StyledHeroHeader>Välkommen till</StyledHeroHeader>
          <WdLogo />
        </HeroText>
      </StyledHero>

      <PanelMenuWrapper>
        <PanelMenu>
          <PanelButton to="/#/QrScanner" icon="qrcode" size="44">
            Scanna övning
          </PanelButton>
          <PanelButton to="/#/statistics" icon="statistics" size="44">
            Se statistik
          </PanelButton>
        </PanelMenu>
      </PanelMenuWrapper>
    </PatientLayout>
  );
};
export default PatientPanel;
