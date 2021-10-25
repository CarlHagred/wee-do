import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "../components/common/Button";
import PatientTheme from "../themes/PatientTheme";
import AdminTheme from "../themes/AdminTheme";
import SearchBar from "../components/common/SearchBar";
import UserInput from "../components/common/UserInput";
import PasswordInput from "../components/common/PasswordInput";
import RsLogo from "../components/images/RsLogo";
import WdLogo from "../components/images/WdLogo";

const StyledHeader = styled.h2`
  font-size: 1.5em;
`;

const Showcase = () => {
  return (
    <>
      <RsLogo />
      <WdLogo />
      <br />
      <StyledHeader>Ikoner</StyledHeader>
      <br />
      <ThemeProvider theme={PatientTheme}>
        <Button outlined icon="user" size="lg">
          user
        </Button>
        <Button outlined icon="add_user" size="lg">
          add_user
        </Button>
        <Button outlined icon="qrcode" size="lg">
          qrcode
        </Button>
        <Button outlined icon="upload" size="lg">
          upload
        </Button>
        <Button outlined icon="trash" size="lg">
          trash
        </Button>
      </ThemeProvider>

      <StyledHeader>Sökfält</StyledHeader>
      <br />
      <SearchBar />
      <StyledHeader>Inputfält</StyledHeader>
      <br />
      <UserInput type="text" placeholder="Användarnamn.." />
      <PasswordInput type="pwd" placeholder="Lösenord.." />
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
