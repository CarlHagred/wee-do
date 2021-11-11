import React from "react";
import styled from "styled-components";

import PatientLayout from "../../components/patient/PatientLayout";
import ScanCamera from "../../components/patient/ScanCamera";

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    flex-direction: column;
`;

const StyledHeader = styled.h1`
    text-align: center;
    font-size: 3em;
    padding-bottom: 30px;
`;

const QrScanner = () => {
    return (
        <PatientLayout>
            <StyledWrapper>
                <StyledHeader>Scanna QR-kod</StyledHeader>
                <ScanCamera />
            </StyledWrapper>
        </PatientLayout>
    );
};

export default QrScanner;
