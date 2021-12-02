import React from "react";
import styled from "styled-components";

import PatientLayout from "../../components/patient/PatientLayout";
import PanelButton from "../../components/common/PanelButton";
import hero from "../../components/images/FT.png";
import WdLogo from "../../components/images/WdLogo";

const StyledHero = styled.div`
  width: 100vw;
  height: 80vh;
  background-image: url(${hero});
  background-color: #e7ddce;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  @media (max-width: 768px) {
    background-image: none;
  }
`;

const HeaderContainer = styled.div`
  text-align: center;
  padding-top: 10%;
  padding-bottom: 20%;
`;

const StyledHeroHeader = styled.div`
  font-size: 3rem;
  @media (max-width: 768px) {
  }
`;

const StyledWdLogo = styled(WdLogo)`
  @media (max-width: 768px) {
  }
`;

const PanelButtonContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
`;

const PatientPanel = () => {
  return (
    <PatientLayout>
      <StyledHero>
        <HeaderContainer>
          <StyledHeroHeader>Välkommen till</StyledHeroHeader>
          <StyledWdLogo width="400px" />
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
