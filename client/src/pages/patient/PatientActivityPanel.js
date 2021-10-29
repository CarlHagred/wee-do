import React from "react";
import Button from "../../components/common/Button";
import PatientTheme from "../../themes/PatientTheme";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import logout from "../../components/common/Confirmation";
import PlaceHolder from "../../components/common/PlaceHolder";
  
const PatientActivityPanel = () => {
  return (
    <>
        <PlaceHolder/>
        <ThemeProvider theme={PatientTheme}>
            <Link to="/QrScanner">
                <Button size="lg" icon="qrcode">Scanna QR-kod</Button>
            </Link>
            <Link to="/">
                <Button size="lg" icon="statistics">Se statistik</Button>
            </Link>
            <Button onClick={logout} neutral icon="exit" color="#8a8883">
                Logga ut
            </Button>
             
        </ThemeProvider>
    </>
);
};
export default PatientActivityPanel;
