import styled from "styled-components";

const StyledContentContainer = styled.div`
    margin-top: 3rem;
`;

const ContentContainer = ({ children }) => {
    return <StyledContentContainer>{children}</StyledContentContainer>;
};

export default ContentContainer;
