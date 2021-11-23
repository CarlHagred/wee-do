import React from "react";
import styled from "styled-components";

import ContentContainer from "../../components/common/ContentContainer";
import WatchingVideo from "../../components/patient/WatchingVideo";

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 3rem;
`;

const WatchingExercise = () => {
    return (
        <ContentContainer>
            <StyledWrapper>
                <WatchingVideo />
            </StyledWrapper>
        </ContentContainer>
    );
};

export default WatchingExercise;
