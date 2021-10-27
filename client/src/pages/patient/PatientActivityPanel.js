import React from "react";
import Button from "../../components/common/Button";
import PatientTheme from "../../themes/PatientTheme";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import logout from "../../components/common/Confirmation";


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
                <Button size="lg" icon="qrcode">Scanna QR-kod</Button>
            </Link>
            <Link to="/">
                <Button size="lg" icon="statistics">Se statistik</Button>
            </Link>
            <Button onClick={logout} icon="exit" color="#8a8883">
                Logga ut
            </Button>
             
        </ThemeProvider>
    </>
);
};
export default PatientActivityPanel;
