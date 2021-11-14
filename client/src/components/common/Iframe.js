import Styled from "styled-components"; 

const StyledWrapper = Styled.div`
    position: relative; 
    overflow: hidden; 
    padding-top: 56.25%;
`;

const StyledIframe = Styled.iframe`
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
`; 

export const Iframe = () => {
    return (
        <>
            <StyledIframe />
        </>
    );
}

export const Wrapper = () => {
    return (
        <>
            <StyledWrapper />
        </>
    );
}