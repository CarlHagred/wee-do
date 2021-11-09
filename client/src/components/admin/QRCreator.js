import React from "react";
import QRCode from "react-qr-code";
import styled from "styled-components";
import { QrFlexbox } from "../common/Flexbox";

const StyledH1 = styled.h1`
    margin: 0.2em;
    font-family: "Roboto", sans-serif;
    font-size: 5em;
    text-align: center;
`


const QRCreator = (props) => {
    return (
        <>
            <StyledH1>{props.text}</StyledH1>
            <QrFlexbox>
            <img src={props.image} alt={props.image} width="25%" />
            <QRCode value={props.id} marginWidth={20} />
            </QrFlexbox>
        </>
    );
};

export default QRCreator;
