import React, { useState } from "react";
import styled from "styled-components";

import AdminLayout from "../../components/admin/AdminLayout"

const StyledContainer = styled.div`
  text-align: left;
  margin: 2.3em;
`;

const StyledH2 = styled.h2`
  font-size: 3.5em;
  text-align: center;
  margin: 2% auto 2% auto;
  font-weight: 900;
`;

const StyledTitle = styled.p`
  font-weight: bold;
  font-size: 2em;
  margin: 0% auto 0% auto;
  padding: 2%;
  border-radius: 25px;
  &:hover {
    background-color: lightgrey;
  }
`;

const StyledP = styled.p`
  font-size: 1.5em;
  margin-top: 1%;
  margin-bottom: 1%;
  padding-left: 5%;
`;

const StyledLi = styled.li`
  font-size: 1.5em;
  margin-top: 1%;
  margin-bottom: 1%;
  padding-left: 5%;
`;

const StyledDiv = styled.div`
  width: 80%;
  margin: 0% auto 1% auto;
`;

const Help = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

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

  return (
    <AdminLayout>
      <StyledContainer>
        <StyledH2>Hjälp</StyledH2>

        <StyledDiv>
          <StyledTitle onClick={handleEvent1}>
            Jag har tappat bort mitt användarnamn:
          </StyledTitle>
          {open1 === true ? (
            <StyledP>
              Om du har tappat bort ditt användarnamn måste du
              komma i kontakt med Sue.
            </StyledP>
          ) : null}
        </StyledDiv>

        <StyledDiv>
          <StyledTitle onClick={handleEvent2}>
            Det går inte att skapa en användare:
          </StyledTitle>
          {open2 === true ? (
            <div>
              <StyledP>
                Om det inte fungerar att skapa en användare, kontrollera
                följande:
              </StyledP>

              <StyledLi>Kontrollera så att en användare med samma användarnamn inte redan finns.</StyledLi>
            </div>
          ) : null}
        </StyledDiv>

        <StyledDiv>
          <StyledTitle onClick={handleEvent3}>
            Det går inte att ladda upp övning:
          </StyledTitle>
          {open3 === true ? (
            <>
              <StyledP>
                Om det inte fungerar att ladda upp en övning, kontrollera följande:
              </StyledP>

              <StyledLi>
                Kontrollera att en video med samma titel inte redan finns.
              </StyledLi>
              <StyledLi>Kontrollera din nätverksanslutning.</StyledLi>
             
              <StyledLi>
                Om du har laddat upp 6 stycken videos idag, måste du vänta tills imorgon för att ladda upp 6 till.
              </StyledLi>
            </>
          ) : null}
        </StyledDiv>
      </StyledContainer>
    </AdminLayout>
  );
};
export default Help;
