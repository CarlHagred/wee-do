import React from "react";

import ContentContainer from "../../components/common/ContentContainer";
import WatchingVideo from "../../components/patient/WatchingVideo";

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
