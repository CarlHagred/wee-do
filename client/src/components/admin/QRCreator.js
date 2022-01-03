import React from "react";
import QRCode from "react-qr-code";
import styled from "styled-components";

import {
  StyledCardFlexContainer,
  StyledCardItem,
  StyledCardHalfContainer,
} from "../common/Flexbox";

const StyledH1 = styled.h1`
  margin: 0.2em;
  font-family: "Roboto", sans-serif;
  font-size: 4em;
  text-align: center;
`;

const StyledParagraph = styled.p`
  font-family: "Roboto", sans-serif;
  text-align: left;
  font-size: 2em;
`;

const QRCreator = (props) => {
  if (!props.patient) {
    return <div />;
  }
  return (
    <>
      <StyledCardFlexContainer>
        <StyledCardHalfContainer>
          <div>
            <StyledH1>{props.text}</StyledH1>
          </div>
          <img src={props.image} alt={props.image} width="40%" />
          <QRCode value={props.id} marginWidth={20} />
        </StyledCardHalfContainer>
        <StyledCardHalfContainer
          justify-items={"center"}
          display={"flex"}
          margin={"1em"}
        >
          <StyledCardItem>
            <StyledParagraph>{props.description}</StyledParagraph>

            <StyledParagraph>
              Utför övningen {props.patient.amountOfTimes} gånger om dagen
            </StyledParagraph>

            <StyledParagraph>Sets: {props.patient.set}</StyledParagraph>

            <StyledParagraph>Reps: {props.patient.rep}</StyledParagraph>
          </StyledCardItem>
        </StyledCardHalfContainer>
      </StyledCardFlexContainer>
    </>
  );
};

export default QRCreator;
