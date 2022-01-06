import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import AdminLayout from "../../components/admin/AdminLayout";
import TopWrapper from "../../components/common/TopWrapper";
import Button from "../../components/common/Button";

import registrera_patient from "../../components/images/Guide/registrera_patient.png";
import valj_ovningar from "../../components/images/Guide/valj_ovningar.png";
import sok_patient from "../../components/images/Guide/sok_patient.png";
import statistik from "../../components/images/Guide/statistik.png";
import sok_ovning from "../../components/images/Guide/sok_ovning.png";
import visa_ovning from "../../components/images/Guide/visa_ovning.png";
import ladda_upp_ovning from "../../components/images/Guide/ladda_upp_ovning.png";

const GuideWrapper = styled.div`
  display: grid;
  max-width: 1000px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 9fr;
  margin: 0 auto;
  @media (min-width: 550px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }
`;

const Sidebar = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  margin-left: 3em;
`;

const SidebarTitle = styled.h1`
  font-size: 1.4em;
  margin-bottom: 0.2em;
  font-weight: 600;
  text-align: left;
  padding-bottom: 0.8em;
`;

const StyledLi = styled.li`
  font-size: 1.2em;
  padding-bottom: 0.8em;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledHelpLink = styled(NavLink)`
  font-size: 1.2em;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

const GuideContainer = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  justify-self: center;
  @media (min-width: 550px) {
    grid-area: 1 / 2 / 2 / 3;
  }
`;

const GuideItem = styled.div`
  margin-bottom: 3em;
`;

const GuideTitle = styled.h1`
  font-size: 1.8em;
  margin-bottom: 0.2em;
  font-weight: 600;
  text-align: left;
`;

const ListItem = styled.li`
  list-style: decimal;
  font-size: 1.2em;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  font-weight: 600;
`;

const StyledParagraph = styled.p`
  max-width: 240px;
  font-size: 1.2em;
  margin-left: 1em;
  margin-bottom: 2em;
  @media (min-width: 410px) {
    max-width: 290px;
  }
  @media (min-width: 970px) {
    max-width: 590px;
  }
`;

const StyledImg = styled.img`
  max-width: 250px;
  border: 1px solid;
  margin-bottom: 1.5em;
  padding: 2em;
  background-color: white;
  @media (min-width: 410px) {
    max-width: 300px;
  }
  @media (min-width: 970px) {
    max-width: 600px;
  }
`;

const StyledButton = styled(Button)`
  margin: 0 auto;
`;

const Guide = () => {
  return (
    <AdminLayout>
      <TopWrapper header="Användarguide" id="top" />

      <GuideWrapper>
        <Sidebar>
          <SidebarTitle>Meny</SidebarTitle>

          <ul>
            <StyledLi>
              <HashLink smooth to={"#registrera-patient"}>
                Registrera patient
              </HashLink>
            </StyledLi>
            <StyledLi>
              <HashLink smooth to={"#sok-patient"}>
                Sök patient
              </HashLink>
            </StyledLi>
            <StyledLi>
              <HashLink smooth to={"#statistik"}>
                Statistik
              </HashLink>
            </StyledLi>
            <StyledLi>
              <HashLink smooth to={"#valj-ovning"}>
                Välj övning
              </HashLink>
            </StyledLi>
            <StyledLi>
              <HashLink smooth to={"#ladda-upp-ovning"}>
                Ladda upp övning
              </HashLink>
            </StyledLi>
            <StyledLi>
              <HashLink smooth to={"#sok-ovning"}>
                Sök övning
              </HashLink>
            </StyledLi>
            <StyledLi>
              <HashLink smooth to={"#visa-ovning"}>
                Visa övning
              </HashLink>
            </StyledLi>
            <StyledHelpLink to="/admin/help">Hjälp</StyledHelpLink>
          </ul>
        </Sidebar>
        <GuideContainer>
          <GuideItem>
            <GuideTitle id="registrera-patient">Registrera patient</GuideTitle>
            <ListItem>Skapa användarnamn</ListItem>
            <StyledParagraph>
              För att registera en ny patient så börja med att skapa ett nytt
              användarnamn.
            </StyledParagraph>
            <ListItem>Nytt användarnamn</ListItem>
            <StyledParagraph>
              Ett nytt användarnamn (Patient-id) presenteras, det finns nu med i
              listan av användarnamn i "Sök Patient".
            </StyledParagraph>

            <ListItem>Välj övningar</ListItem>
            <StyledParagraph>
              Välj övningar för patienten, där kommer även användarnamnet synas
              igen.
            </StyledParagraph>

            <StyledImg src={registrera_patient} />
            <HashLink smooth to={"#top"}>
              <StyledButton>Till toppen</StyledButton>
            </HashLink>
          </GuideItem>
          <GuideItem>
            <GuideTitle id="sok-patient">Sök patient</GuideTitle>
            <ListItem>Sök</ListItem>
            <StyledParagraph>Ange användarnamn att söka.</StyledParagraph>
            <ListItem>Välj aktiv patient</ListItem>
            <StyledParagraph>
              Välj bland aktiva användare, klicka på användarnamnet för att
              komma vidare.
            </StyledParagraph>

            <ListItem>Välj inaktiv patient</ListItem>
            <StyledParagraph>
              Välj bland inaktiva användare, klicka på användarnamnet för att
              komma vidare.
            </StyledParagraph>

            <StyledImg src={sok_patient} />
            <HashLink smooth to={"#top"}>
              <StyledButton>Till toppen</StyledButton>
            </HashLink>
          </GuideItem>
          <GuideItem>
            <GuideTitle id="statistik">Statistik</GuideTitle>

            <ListItem>Vald patient</ListItem>
            <StyledParagraph>
              Här visas Patient-id på vald patient.
            </StyledParagraph>

            <ListItem>
              Välj övningar, Gör patient inaktiv och Radera patient
            </ListItem>
            <StyledParagraph>
              Välj övningar för aktuell patient, gör patient inaktiv eller
              radera patient.
            </StyledParagraph>

            <ListItem>Valda övningar</ListItem>
            <StyledParagraph>
              Här visas Patientens valda övningar med antal gånger per dag,
              antal sets per gång och antal reps per set. Det finns även
              möjlighet att radera en vald övning från patienten.
            </StyledParagraph>

            <ListItem>Kalender</ListItem>
            <StyledParagraph>
              Välj ett datum i kalendern för att se vilka övningar som utförts.
              Resultatet presenteras till höger om kalendern kalendern (se nr 5
              "Statistik för dag"). Är det tomt så har det ej utförts någon
              övning den dagen.
            </StyledParagraph>

            <ListItem>Statistik för dag</ListItem>
            <StyledParagraph>
              Här visas resultatet för dag vald i kalendern.
            </StyledParagraph>

            <ListItem>Diagram</ListItem>
            <StyledParagraph>
              Här visas diagram över de övningar som patienten utfört.
            </StyledParagraph>

            <StyledImg src={statistik} />
            <HashLink smooth to={"#top"}>
              <StyledButton>Till toppen</StyledButton>
            </HashLink>
          </GuideItem>
          <GuideItem>
            <GuideTitle id="valj-ovning">Välj övning</GuideTitle>
            <ListItem>Sök övning</ListItem>
            <StyledParagraph>
              Sök efter en övning eller välj bland alla övningar som presenteras
              på sidan.
            </StyledParagraph>

            <ListItem>Välj GPD, SET och REP</ListItem>
            <StyledParagraph>
              {" "}
              Börja med att välja <strong>GPD:</strong> Antal gånger per dag,{" "}
              <strong>SET:</strong> antal sets per gång, <strong>REP:</strong>{" "}
              antal reps per set.
            </StyledParagraph>

            <ListItem>Välj övning</ListItem>
            <StyledParagraph>
              Välj övning genom att klicka i rutan så visas en bock. Välj fler
              övningar eller gå vidare till spara övningar.
            </StyledParagraph>

            <ListItem>Spara övningar</ListItem>
            <StyledParagraph>
              Genom att klicka på knappen "Spara övningar" så läggs de valda
              övningarna till för patienten.
            </StyledParagraph>

            <StyledImg src={valj_ovningar} />
            <HashLink smooth to={"#top"}>
              <StyledButton>Till toppen</StyledButton>
            </HashLink>
          </GuideItem>
          <GuideItem>
            <GuideTitle id="ladda-upp-ovning">Ladda upp övning</GuideTitle>
            Systemet tillåter 6 uppladdningar per dag.
            <ListItem>Titel</ListItem>
            <StyledParagraph>Ange namn på övning.</StyledParagraph>
            <ListItem>Benämning</ListItem>
            <StyledParagraph>Ange beskrivande text.</StyledParagraph>
            <ListItem>Välj fil</ListItem>
            <StyledParagraph>Lägg till fil för övning.</StyledParagraph>
            <ListItem>Ladda upp</ListItem>
            <StyledParagraph>
              Tryck på knappen "Ladda upp ny övning" för att ladda upp video.
            </StyledParagraph>
            <StyledImg src={ladda_upp_ovning}></StyledImg>
            <HashLink smooth to={"#top"}>
              <StyledButton>Till toppen</StyledButton>
            </HashLink>
          </GuideItem>
          <GuideItem>
            <GuideTitle id="sok-ovning">Sök övning</GuideTitle>
            <ListItem>Sök</ListItem>
            <StyledParagraph>
              Sök efter en övning eller välj bland alla övningar som visas på
              sidan.
            </StyledParagraph>

            <ListItem>Visa</ListItem>
            <StyledParagraph>
              Välj en övning och klicka på visa så visas övningen på en egen
              sida.
            </StyledParagraph>

            <StyledImg src={sok_ovning} />
            <HashLink smooth to={"#top"}>
              <StyledButton>Till toppen</StyledButton>
            </HashLink>
          </GuideItem>
          <GuideItem>
            <GuideTitle id="visa-ovning">Visa övning</GuideTitle>
            <ListItem>Spela</ListItem>
            <StyledParagraph>
              Välj PLAY för att spela upp videon.
            </StyledParagraph>

            <ListItem>Radera</ListItem>
            <StyledParagraph>
              Välj radera för att ta bort en övning permanent.
            </StyledParagraph>

            <ListItem>Skapa kort</ListItem>
            <StyledParagraph>
              Skapa ett kort för utskrift till patient: Börja med att ange
              patient-id och tryck sedan på "Visa kort".
            </StyledParagraph>

            <StyledImg src={visa_ovning} />
            <HashLink smooth to={"#top"}>
              <StyledButton>Till toppen</StyledButton>
            </HashLink>
          </GuideItem>
        </GuideContainer>
      </GuideWrapper>
    </AdminLayout>
  );
};
export default Guide;
