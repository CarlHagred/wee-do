import React from "react";
import styled from "styled-components";

import PatientLayout from "../../components/patient/PatientLayout";
import ScanCamera from "../../components/patient/ScanCamera";

const CameraContainer = styled.div`
  display: flex;
  justify-content: top;
  flex-direction: column;
  align-items: center;
  min-height: 500px;
`;

const StyledHeader = styled.h1`
  text-align: center;
  font-size: 2em;
  padding: 1em;
  font-weight: 600;
`;

const QrScanner = () => {
  return (
    <PatientLayout>
      <CameraContainer>
        <StyledHeader>Scanna QR-kod</StyledHeader>
        <ScanCamera />
      </CameraContainer>
    </PatientLayout>
  );
};

export default QrScanner;
