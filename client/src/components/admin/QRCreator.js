import React from "react";
import QRCode from "react-qr-code";
import styled from "styled-components";

import {
  StyledQrFlexContainer,
  StyledQrItem,
  StyledQrHalfContainer,
} from "../common/Flexbox";

const StyledH1 = styled.h1`
  margin: 0.2em;
  font-family: "Roboto", sans-serif;
  font-size: 5em;
  text-align: center;
`;

const StyledParagraph = styled.p`
  font-family: "Roboto", sans-serif;
  text-align: left;
  font-size: 1em;
`;

const QRCreator = (props) => {
  return (
    <>
      <StyledQrFlexContainer>
        <StyledQrHalfContainer>
          <div>
            <StyledH1>{props.text}</StyledH1>
          </div>
          <img src={props.image} alt={props.image} width="40%" />
          <QRCode value={props.id} marginWidth={20} />
        </StyledQrHalfContainer>
        <StyledQrHalfContainer justify-content={"center"}>
          <StyledQrItem>
            <StyledParagraph></StyledParagraph>
          </StyledQrItem>
        </StyledQrHalfContainer>
      </StyledQrFlexContainer>
    </>
  );
};

export default QRCreator;
