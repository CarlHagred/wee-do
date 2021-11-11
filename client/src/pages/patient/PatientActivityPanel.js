import React from "react";
import Button from "../../components/common/Button";
import PatientTheme from "../../themes/PatientTheme";
import PatientLayout from "../../components/patient/PatientLayout";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { customDialogPatient } from "../../components/common/Confirmation";
import PanelButton from "../../components/common/PanelButton";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    flex-direction: column;
`;

const PanelMenu = styled.nav`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    list-style-type: none;
    margin-top: 20px;
    justify-content: center;
`;

const StyledHeader = styled.h1`
    text-align: center;
    font-size: 3em;
`;

const PatientActivityPanel = () => {
    return (
        <PatientLayout>
            <StyledHeader>Välkommen till WeeDo</StyledHeader>
            <PanelMenu>
                <PanelButton to="/QrScanner" icon="qrcode">
                    Scanna övning
                </PanelButton>
                <PanelButton to="/statistics" icon="statistics">
                    Se statistik
                </PanelButton>
            </PanelMenu>
        </PatientLayout>
    );
};
export default PatientActivityPanel;
