import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Button from "../../components/common/Button";

import PatientLayout from "../../components/patient/PatientLayout";

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

const StyledButton = styled(Button)`
  margin: 30px auto;
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
    background-color: lightgrey;
  }
`;

const About = () => {
  let isCookie = localStorage.getItem("isAuthenticatedPatient");
  let history = useHistory();

  const goBack = () => {
    history.push("/")
  };

  return (
    <PatientLayout>
      <StyledContainter>
        <StyledHeader>Om WeeDo:</StyledHeader>
        <StyledP>
          WeeDo är ett samarbete mellan Mobilt Sjukhus Team och Malmö Universitetet.
        </StyledP>
        <StyledP>
          Vi är en grupp studenter som går vårt sista år som
          Informationsarkitekter och Systemutvecklare. För vårt examensprojekt
          blev vi utvalda att samarbeta med Mobilt Sjukhus Team för att utveckla en
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
        
        <StyledA href="https://mau.se/">Malmö Universitet</StyledA>
        
        <StyledA href="https://mau.se/sok-utbildning/program/tgiaa/">
          Informationsarkitektur
        </StyledA>
        
        <StyledA href="https://mau.se/sok-utbildning/program/tgsya/">
          Systemutveckling
        </StyledA>
        
        {isCookie === null ? (
        <StyledButton size="lg" onClick={goBack}>
          Tillbaka
        </StyledButton>
      ) : null}
      </StyledContainter>
    </PatientLayout>
  );
};

export default About;
