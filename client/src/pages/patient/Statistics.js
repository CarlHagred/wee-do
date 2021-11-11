import React from "react";
import styled from "styled-components";

import PatientLayout from "../../components/patient/PatientLayout";

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 3rem;
    flex-direction: column;
`;
const StyledHeader = styled.h1`
    text-align: center;
    font-size: 3em;
`;

const StyledParagraph = styled.p`
    margin: 20px;
    color: red;
    font-size: 1.5em;
`;

const Statistics = () => {
    return (
        <PatientLayout>
            <StyledWrapper>
                <StyledHeader>Statistik</StyledHeader>
                <StyledParagraph>under konstruktion</StyledParagraph>
            </StyledWrapper>
        </PatientLayout>
    );
};

export default Statistics;
