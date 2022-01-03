import React from "react";
import styled from "styled-components";

import AdminLayout from "../../components/admin/AdminLayout";

const StyledContainter = styled.div`
  margin: 2.3em;
  align-items: center;
`;

const StyledHeader = styled.h1`
  font-size: 3.5em;
  text-align: center;
  font-weight: 900;
  margin-top: 30px;
  margin-bottom: 20px;

  @media (max-width: 375px) {
    font-size: 2.5em;
  }
`;

const StyledP = styled.p`
  font-size: 1.5em;
  margin-top: 3%;
  margin-bottom: 1%;
  padding-left: 3%;
  @media (max-width: 375px) {
    font-size: 1.1rem;
  }
`;

const StyledA = styled.a`
  display: block;
  width: fit-content;
  margin: 0% 0% 0% 3%;
  font-size: 1.4em;
  padding: 0.8%;
  &:hover {
    background-color: ${(props) => props.theme.palette.hover};
    border-radius: 5px;
  }
`;

const About = () => {
  return (
    <AdminLayout>
      <StyledContainter>
        <StyledHeader>Om WeeDo:</StyledHeader>
        <StyledP>WeeDo är ett samarbete mellan Mobilt Sjukhus Team och Malmö Universitet.</StyledP>
        <StyledP>
          Vi är en grupp studenter som går vårt sista år som
          Informationsarkitekter och Systemutvecklare. För vårt examensprojekt
          blev vi utvalda att samarbeta med Region Skåne för att utveckla en
          webbapplikation för att brygga avståndet mellan patienter och dess
          fysioterapeuter. Region Skåne göra en webbapplikation för att kunna
          vill ge patienter möjlighet till att sköta återhämtning och
          fysioterapi från sitt eget hem, samtidigt som man bibehåller en
          kontinuerlig kontakt med sin fysioterapeft.
        </StyledP>
        
        <StyledP>
          <strong>
            Vill du veta mer Malmö Universitet och om de två programmen, följ
            länkarna nedan:
          </strong>
        </StyledP>
        
        <StyledA href="https://mau.se/" target="_blank">Malmö Universitet</StyledA>
        
        <StyledA href="https://mau.se/sok-utbildning/program/tgiaa/" target="_blank">
          Informationsarkitektur
        </StyledA>
        
        <StyledA href="https://mau.se/sok-utbildning/program/tgsya/" target="_blank">
          Systemutveckling
        </StyledA>
        
      </StyledContainter>
    </AdminLayout>
  );
};

export default About;
