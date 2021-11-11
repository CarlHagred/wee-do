import React from "react";
import styled from "styled-components";

import PatientLayout from "../../components/patient/PatientLayout";
import ScanCamera from "../../components/patient/ScanCamera";

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 3rem;
`;

const QrScanner = () => {
    return (
        <PatientLayout>
            <StyledWrapper>
                <ScanCamera />
            </StyledWrapper>
        </PatientLayout>
    );
};

export default QrScanner;
