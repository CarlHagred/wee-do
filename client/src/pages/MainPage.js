import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/styled/Input";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import PatientTheme from "../themes/PatientTheme";
import Paragraph from "../components/styled/Paragraph";
import Button from "../components/styled/Button";
import { data } from "../data";
import StatTable from "../components/styled/StatTable";
import UserTable from "../components/styled/UserTable";
import { users } from "../users";

const PlaceKitten = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const StyledLinks = styled.div`
  margin: 10px;
`;

// Lagt in bild + input + button för visuellt test

const MainPage = () => {
  return (
    <>
      <PlaceKitten>
        <img src="http://placekitten.com/340/250" align="center" />
      </PlaceKitten>
      <Input type="text" placeholder="Användarnamn.." />
      <ThemeProvider theme={PatientTheme}>
        <Button>Logga in</Button>
      </ThemeProvider>
      <StatTable data={data} />
      <UserTable users={users}/>

      <StyledLinks>
        <h2>Tillfällig länklista:</h2>
        <br />
        <ul>
          <Link to="/activities">Activities</Link>
        </ul>
        <ul>
          <Link to="/exercises">Exercises</Link>
        </ul>
        <ul>
          <Link to="/scanner">Scanner</Link>
        </ul>
        <ul>
          <Link to="/showcase">Components Showcase</Link>
        </ul>
      </StyledLinks>
    </>
  );
};
export default MainPage;