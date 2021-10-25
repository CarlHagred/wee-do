import React from "react";
import Button from "../components/styled/Button";
import PatientTheme from "../themes/PatientTheme";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import NeutralTheme from "../themes/NeutralTheme";
import r from "../components/common/Confirmation";

const PlaceKitten = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const PatientActivityPanel = () => {
  return (
    <>
        <PlaceKitten>
          <img src="http://placekitten.com/340/250" align="center" alt="Mjau" />
        </PlaceKitten>
        <ThemeProvider theme={PatientTheme}>
            <Link to="/Scanner">
                <Button size="lg">Scanna QR-kod</Button>
            </Link>
            <Link to="/">
                <Button size="lg">Se statistik</Button>
            </Link>
        </ThemeProvider>
        <ThemeProvider theme={NeutralTheme}>
            <Link to="/">
                <Button onClick={r}>Logga ut</Button>
            </Link> 
        </ThemeProvider>
    </>
);
};
export default PatientActivityPanel;
