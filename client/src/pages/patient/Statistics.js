import React from "react";
import styled from "styled-components";

import ContentContainer from "../../components/common/ContentContainer";

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 3rem;
    flex-direction: column;
    text-align: center;
`;
const StyledHeader = styled.h1`
    font-size: 3em;
`;

const StyledParagraph = styled.p`
    margin: 20px;
    color: red;
    font-size: 1.5em;
`;

const Statistics = () => {
    return (
        <ContentContainer>
            <StyledWrapper>
                <StyledHeader>Statistik</StyledHeader>
                <StyledParagraph>under konstruktion</StyledParagraph>
            </StyledWrapper>
        </ContentContainer>
    );
};

export default Statistics;
