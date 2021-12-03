import React from "react";
import styled from "styled-components";

import PatientLayout from "../../components/patient/PatientLayout";
import PanelButton from "../../components/common/PanelButton";
import hero from "../../components/images/FT.png";
import WdLogo from "../../components/images/WdLogo";

const StyledHero = styled.div`
  width: 100%;
  background-color: #e7ddce;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  @media (min-width: 768px) {
    background-image: url(${hero});
    height: 80vh;
  }
`;

const HeaderContainer = styled.div`
  text-align: center;
  padding-top: 10%;
  padding-bottom: 20%;
  margin: 0 3em;
  @media (min-width: 768px) {
    position: absolute;
    top: 45%;
    left: 14%;
    transform: translate(-20%, -50%);
  }
`;

const StyledHeroHeader = styled.h1`
  font-size: 3rem;
  @media (min-width: 768px) {
  }
`;
const StyledHeroText = styled.p``;

const StyledWdLogo = styled(WdLogo)`
  @media (min-width: 768px) {
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
  @media (min-width: 768px) {
    position: absolute;
    top: 85%;
    left: 12%;
    transform: translate(-20%, -50%);
  }
`;

const PatientPanel = () => {
  return (
    <PatientLayout>
      <StyledHero>
        <HeaderContainer>
          <StyledHeroHeader>Välkommen!</StyledHeroHeader>
          <StyledHeroText>Vad vill du göra?</StyledHeroText>
        </HeaderContainer>

        <PanelButtonContainer>
          <PanelButton to="/QrScanner" icon="qrcode" size="44">
            Scanna övning
          </PanelButton>
          <PanelButton to="/statistics" icon="statistics" size="44">
            Se statistik
          </PanelButton>
        </PanelButtonContainer>
      </StyledHero>
    </PatientLayout>
  );
};
export default PatientPanel;
