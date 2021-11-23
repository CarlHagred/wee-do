import React from "react";
import styled from "styled-components";

const StyledContainter = styled.div`
  margin: 2.3em;
  align-items: center;
`;

const StyledH2 = styled.h2`
  font-weight: 600;
  font-size: 30px;
`;

const About = () => {
  return (
    <StyledContainter>
      <StyledH2>Om WeeDo:</StyledH2>
      <br />
      <p>WeeDo är ett samarbete mellan Region Skåne och Malmö Universitetet.</p>
      <p>
        Vi är en grupp studenter som går vårt sista år som
        Informationsarkitekter och Systemutvecklare. För vårt examensprojekt
        blev vi utvalda att samarbeta med Region Skåne för att utveckla en
        webbapplikation för att brygga avståndet mellan patienter och dess
        fysioterapeuter. Region Skåne göra en webbapplikation för att kunna vill
        ge patienter möjlighet till att sköta återhämtning och fysioterapi från
        sitt eget hem, samtidigt som man bibehåller en kontinuerlig kontakt med
        sin fysioterapeft.
      </p>
      <br />
      <p>
        <strong>
          Vill du veta mer Malmö Universitet och om de två programmen, följ
          länkarna nedan:
        </strong>
      </p>
      <br />
      <a href="https://mau.se/">Malmö Universitet</a>
      <br />
      <a href="https://mau.se/sok-utbildning/program/tgiaa/">
        Informationsarkitektur
      </a>
      <br />
      <a href="https://mau.se/sok-utbildning/program/tgsya/">
        Systemutveckling
      </a>
      <br />
    </StyledContainter>
  );
};

export default About;
