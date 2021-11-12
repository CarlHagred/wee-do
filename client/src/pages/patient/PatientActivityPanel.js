import React from "react";
import styled from "styled-components";

import PatientLayout from "../../components/patient/PatientLayout";
import PanelButton from "../../components/common/PanelButton";
import hero from "../../components/images/patient_hero.png";

const StyledHero = styled.div`
    width: 100vw;
    height: 40vh;
    background-image: url(${hero});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`;

const StyledHeroHeader = styled.h1`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 3rem;
`;

const PanelMenu = styled.nav`
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    list-style-type: none;
    margin-top: 4em;
    margin-bottom: 4em;
    justify-content: center;
`;

const PatientActivityPanel = () => {
    return (
        <PatientLayout>
            <StyledHero>
                <StyledHeroHeader>Välkommen till WeeDo</StyledHeroHeader>
            </StyledHero>

            <PanelMenu>
                <PanelButton to="/QrScanner" icon="qrcode" size="44">
                    Scanna övning
                </PanelButton>
                <PanelButton to="/statistics" icon="statistics" size="44">
                    Se statistik
                </PanelButton>
            </PanelMenu>
        </PatientLayout>
    );
};
export default PatientActivityPanel;
