import React from "react";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Button from "../components/common/Button";
import PatientTheme from "../styling/themes/PatientTheme";
import AdminTheme from "../styling/themes/AdminTheme";
import Input from "../components/common/Input";
import SearchBar from "../components/common/SearchBar";

const StyledHeader = styled.h2`
  font-size: 1.5em;
`;

const Showcase = () => {
  return (
    <>
      <Link to="/">Tillbaka till förstasidan</Link>
      <br />
      <br />
      <StyledHeader>Sökfält</StyledHeader>
      <br />
      <SearchBar />
      <StyledHeader>Inputfält</StyledHeader>
      <br />
      <Input type="text" placeholder="Användarnamn.." />
      <Input type="text" placeholder="Lösenord.." />
      <br />

      <StyledHeader>Buttons</StyledHeader>
      <br />
      <ThemeProvider theme={PatientTheme}>
        <p>Patient Theme</p>

        <Button>Small</Button>

        <Button icon="user">Small with Icon</Button>

        <Button size="lg">Large</Button>
      </ThemeProvider>

      <ThemeProvider theme={AdminTheme}>
        <p>Admin Theme</p>
        <Button>Small</Button>
        <Button icon="user">Small with Icon</Button>

        <Button size="lg">Large</Button>
        <Button icon="user" size="lg">
          Large with Icon
        </Button>
        <p>Outlined</p>

        <Button outlined>Outlined small</Button>

        <Button outlined size="lg">
          Outlined Large
        </Button>

        <Button outlined size="lg" icon="user" color="black">
          Outlined Large
        </Button>

        <p>Disabled</p>

        <Button disabled>Disabled</Button>
        <Button disabled size="lg">
          Disabled
        </Button>
      </ThemeProvider>
    </>
  );
};
export default Showcase;
