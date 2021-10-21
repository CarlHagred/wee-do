import React from "react";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Button from "../components/styled/Button";
import Paragraph from "../components/styled/Paragraph";
import PatientTheme from "../themes/PatientTheme";
import AdminTheme from "../themes/AdminTheme";
import Input from "../components/styled/Input";
import SearchBar from "../components/styled/SearchBar";
import NavBar from "../components/styled/NavBar";

const StyledHeader = styled.h2`
  font-size: 1.5em;
`;

const Showcase = () => {
  return (
    <>
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
        <Paragraph>Patient Theme</Paragraph>

        <Button>Small</Button>

        <Button icon="user">Small with Icon</Button>

        <Button size="lg">Large</Button>
      </ThemeProvider>

      <ThemeProvider theme={AdminTheme}>
        <Paragraph>Admin Theme</Paragraph>
        <Button>Small</Button>
        <Button icon="user">Small with Icon</Button>

        <Button size="lg">Large</Button>
        <Button icon="user" size="lg">
          Large with Icon
        </Button>
        <Paragraph>Outlined</Paragraph>

        <Button outlined>Outlined small</Button>

        <Button outlined size="lg">
          Outlined Large
        </Button>

        <Button outlined size="lg" icon="user" color="black">
          Outlined Large
        </Button>

        <Paragraph>Disabled</Paragraph>

        <Button disabled>Disabled</Button>
        <Button disabled size="lg">
          Disabled
        </Button>
      </ThemeProvider>
    </>
  );
};
export default Showcase;
