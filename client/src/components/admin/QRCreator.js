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
            <StyledParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ullamcorper a lacus vestibulum sed. Ac odio tempor orci dapibus
              ultrices in iaculis. A erat nam at lectus urna duis convallis
              convallis. Et magnis dis parturient montes nascetur ridiculus mus.
              Elementum nibh tellus molestie nunc. Orci eu lobortis elementum
              nibh tellus molestie nunc. Natoque penatibus et magnis dis
              parturient montes nascetur ridiculus mus. Pretium lectus quam id
              leo in vitae turpis massa sed. Tempus iaculis urna id volutpat
              lacus laoreet non curabitur gravida.
            </StyledParagraph>
          </StyledQrItem>
        </StyledQrHalfContainer>
      </StyledQrFlexContainer>
    </>
  );
};

export default QRCreator;
