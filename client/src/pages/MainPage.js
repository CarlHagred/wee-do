import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/styled/Input";
import styled from "styled-components";
import Button from "../components/styled/Button";

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
        <img src="http://placekitten.com/340/250" align="center" alt="Mjau" />
      </PlaceKitten>
      <Input type="text" placeholder="Användarnamn.." />
      <Button>Logga in</Button>

      <StyledLinks>
        <h2>Tillfällig länklista:</h2>
        <br />
        <ul>
          <Link to="/activities">Activities</Link>
        </ul>
        <ul>
          <Link to="/searchpatientpage">Sök patient</Link>
        </ul>
        <ul>
          <Link to="/registerpatientpage">Registrera patient</Link>
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
