import React from "react";
import styled from "styled-components";

import PatientLayout from "../../components/patient/PatientLayout";
import WatchingVideo from "../../components/patient/WatchingVideo";

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 3rem;
`;

const WatchingExercise = () => {
    return (
        <PatientLayout>
            <StyledWrapper>
                <WatchingVideo />
            </StyledWrapper>
        </PatientLayout>
    );
};

export default WatchingExercise;
