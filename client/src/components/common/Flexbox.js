import styled from "styled-components";

const StyledFlexbox = styled.div`
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    align-items: baseline;
    flex-wrap: wrap;
    margin: 1em;
`;

const StyledQrFlexbox = styled(StyledFlexbox)`
    margin-left: 20em;
    margin-right: 20em;
    align-items: center;
    justify-content: space-evenly;
`;

const FlexItem = styled.div`
    margin-left: 0.5em;
    margin-right: 0.5em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    padding-top: 0.5em;

    :hover {
        filter: brightness(130%);
        background-color: ${(props) => props.theme.palette.hover};
    }
`;
export const VideoItem = (props) => {
    return (
        <>
            <FlexItem {...props} />
        </>
    );
};

export const QrFlexbox = (props) => {
    return (
        <>
            <StyledQrFlexbox {...props} />
        </>
    );
};

export const Flexbox = (props) => {
    return (
        <>
            <StyledFlexbox {...props} />
        </>
    );
};

export default Flexbox + QrFlexbox + VideoItem;
