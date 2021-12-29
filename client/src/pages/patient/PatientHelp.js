import React, { useState } from "react";
import styled from "styled-components";

import PatientLayout from "../../components/patient/PatientLayout";
import { getAllActivePatients, getSession } from "../../api";
import Button from "../../components/common/Button";

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

const StyledDiv = styled.div`
  margin: 0 auto;
  width: 90%;
`;

const StyledTitle = styled.p`
  font-weight: bold;
  font-size: 2em;
  border-radius: 25px;
  padding: 10px;
  &:hover {
    background-color: lightgrey;
    cursor: pointer;
  }
  @media (max-width: 375px) {
    font-size: 1.3rem;
  }
`;

const StyledP = styled.p`
  font-size: 1.5em;
  margin-top: 1%;
  margin-bottom: 5%;
  padding-left: 3%;
  @media (max-width: 375px) {
    font-size: 1.1rem;
  }
`;

const StyledLi = styled.li`
  font-size: 1.5em;
  margin-top: 1%;
  margin-bottom: 3%;
  padding-left: 8%;
  @media (max-width: 375px) {
    font-size: 1.1rem;
  }
`;

const StyledButton = styled(Button)`
  margin: 30px auto;
`;

const Help = () => {
  const [patient, setPatient] = useState("");
  const [active, setActive] = useState([]);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  let phoneNr = "077-67 30 000";

  const getActivity = async () => {
    try {
      const currentActivity = await getAllActivePatients();
      if (!currentActivity.data) {
        throw new Error(`Error: ${currentActivity.status}`);
      }
      if (currentActivity) {
        setActive(currentActivity.data[0].name);
      }
    } catch (e) {}
  };

  const getPatient = async () => {
    try {
      const currentPatient = await getSession();
      if (!currentPatient) {
        throw new Error(`Error ${currentPatient.status}`);
      }
      if (currentPatient) {
        setPatient(currentPatient.data.name);
      }
    } catch (e) {}
  };

  getActivity();
  getPatient();

  const handleEvent1 = () => {
    if (open1 === false) {
      setOpen1(true);
    }
    if (open1 === true) {
      setOpen1(false);
    }
  };

  const handleEvent2 = () => {
    if (open2 === false) {
      setOpen2(true);
    }
    if (open2 === true) {
      setOpen2(false);
    }
  };

  const handleEvent3 = () => {
    if (open3 === false) {
      setOpen3(true);
    }
    if (open3 === true) {
      setOpen3(false);
    }
  };

  let isCookie = localStorage.getItem("isAuthenticatedPatient");

  const goBack = () => {
    window.history.back();
  };

  return (
    <PatientLayout>
      <StyledHeader>Hjälp</StyledHeader>

      <StyledDiv>
        <StyledTitle onClick={handleEvent1}>
          Jag har tappat bort mitt användarnamn eller QR-kod:
        </StyledTitle>
        {open1 === true ? (
          <StyledP>
            Om du har tappat bort ditt användarnamn eller QR-kod måste du komma
            i kontakt med sjukhuset du besökte när du fick ditt användarnamn
            eller QR-kod och be om ett nytt.
          </StyledP>
        ) : null}
      </StyledDiv>

      <StyledDiv>
        <StyledTitle onClick={handleEvent2}>
          Jag kan inte skanna in min QR-kod:
        </StyledTitle>
        {open2 === true ? (
          <div>
            <StyledP>
              Om det inte fungerar att skanna in QR-koden, kontrollera följande:
            </StyledP>

            <StyledLi>Kontrollera så att din kamera fungerar.</StyledLi>
            <StyledLi>
              Har du accepterat (ja/nej) att webbsidan får använda sig av din
              kamera?
            </StyledLi>
            <StyledLi>
              Om du inte har det, gå till din webbläsare {">"} Inställningar{" "}
              {">"} Integritet och säkerhet {">"} Webbplatsinställningar {">"}{" "}
              Kamera och godkänn användningen av din kamera-enhet.
            </StyledLi>
            <StyledLi>
              Testa att öka ljusstyrkan på skärmen du skannar din QR-kod på,
              eller testa att tända en lampa.
            </StyledLi>
            <StyledLi>Stödjer din enhet skanning av QR-koder?</StyledLi>
          </div>
        ) : null}
      </StyledDiv>

      <StyledDiv>
        <StyledTitle onClick={handleEvent3}>
          Det fungerar inte att logga in:
        </StyledTitle>
        {open3 === true ? (
          <>
            <StyledP>
              Om det inte fungerar att logga in, kontrollera följande:
            </StyledP>

            <StyledLi>
              Kontrollera att ditt användarnamn stämmer, 6 tecken.
            </StyledLi>
            <StyledLi>Kontrollera din nätverksanslutning</StyledLi>
            {patient === active ? (
              <StyledLi>
                Om det fortfarande inte fungerar, kontakta Region Skånes
                Servicedesk Telefon: {phoneNr}, knappval 2 (IT) följt av 5
                (övrigt).
              </StyledLi>
            ) : null}
          </>
        ) : null}
      </StyledDiv>
      {isCookie === null && active !== null ? (
        <StyledButton size="lg" onClick={goBack}>
          Tillbaka
        </StyledButton>
      ) : null}
    </PatientLayout>
  );
};
export default Help;
