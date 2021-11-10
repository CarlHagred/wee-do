import React from "react";
import Button from "../../components/common/Button";
import PatientTheme from "../../themes/PatientTheme";
import PatientLayout from "../../components/patient/PatientLayout";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { customDialogPatient } from "../../components/common/Confirmation";
import PanelButton from "../../components/common/PanelButton";
import styled from "styled-components";

const PanelMenu = styled.nav`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    list-style-type: none;
    margin-top: 20px;
    justify-content: center;
`;

const PatientActivityPanel = () => {
    return (
        <PatientLayout>
            <PanelMenu>
                <PanelButton to="/QrScanner" icon="qrcode">
                    Scanna övning
                </PanelButton>
                <PanelButton to="/" icon="statistics">
                    Se statistik
                </PanelButton>

                <Button
                    onClick={customDialogPatient}
                    neutral
                    icon="exit"
                    color="#8a8883"
                >
                    Logga ut
                </Button>
            </PanelMenu>
        </PatientLayout>
    );
};
export default PatientActivityPanel;
