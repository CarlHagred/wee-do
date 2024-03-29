import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "../components/common/Button";
import PatientTheme from "../themes/PatientTheme";
import AdminTheme from "../themes/AdminTheme";
import SearchBar from "../components/common/SearchBar";
import UserInput from "../components/common/UserInput";
import PasswordInput from "../components/common/PasswordInput";
import WdLogo from "../components/images/WdLogo";
import Icon from "../components/common/Icons";
import PanelButton from "../components/common/PanelButton";

const ShowcaseWrapper = styled.div`
  padding: 40px;
`;

const StyledH1 = styled.h1`
  font-size: 3em;
  text-align: center;
`;

const StyledH2 = styled.h2`
  margin: 40px 0 10px 0;
  font-size: 1.5em;
  border-top: 4px solid black;
  text-align: center;
  font-weight: bold;
`;

const StyledP = styled.p`
  padding: 10px;
`;

const Showcase = () => {
  return (
    <ShowcaseWrapper>
      <StyledH1>Showcase</StyledH1>
      {/* Fill ändrar färg på svg:n. Går ej att göra på RSLogo, då får man gå in i svg:n*/}
      {/* Width och Height ändrar storlek, kan anges i t ex %, em eller px */}

      <StyledH2>Logotype - SVG</StyledH2>
      <br />
      <br />
      <WdLogo width="25%" height="25%" />
      <br />
      <WdLogo width="25%" height="25%" fill="#FF0000" />
      <br />

      <StyledH2>Icons - React Icons</StyledH2>
      {/* Fill ändrar färg se exempel i user/}
      {/* Size ändrar storlek, kan anges i t ex % eller em */}

      <StyledP>
        <Icon name="user" size="2em" /> user
      </StyledP>
      <StyledP>
        <Icon name="user" size="2em" fill="red" /> user (fill="färg")
      </StyledP>
      <StyledP>
        <Icon name="add_user" size="2em" /> add_user
      </StyledP>
      <StyledP>
        <Icon name="qrcode" size="2em" /> qrcode
      </StyledP>
      <StyledP>
        <Icon name="upload" size="2em" /> upload
      </StyledP>
      <StyledP>
        <Icon name="trash" size="2em" /> trash
      </StyledP>
      <StyledP>
        <Icon name="exit" size="2em" /> exit
      </StyledP>
      <StyledP>
        <Icon name="statistics" size="2em" /> statistics
      </StyledP>

      <StyledH2>Icons - SVG</StyledH2>
      {/* Fill ändrar färg se exempel nedan */}
      {/* Width och Height ändrar storlek */}

      <StyledP>
        <Icon name="search_patient" width="32" height="32" fill="black" />
        search_patient (fill="färg")
      </StyledP>
      <StyledP>
        <Icon name="search_exercise" width="32" height="32" fill="black" />{" "}
        search_exercise (fill="färg")
      </StyledP>

      <StyledH2>Searchfields</StyledH2>
      <br />
      <SearchBar />
      <StyledH2>Inputfields</StyledH2>
      <br />
      <UserInput type="text" placeholder="Användarnamn.." />
      <PasswordInput type="pwd" placeholder="Lösenord.." />
      <br />

      <StyledH2>Panel Buttons</StyledH2>
      {/* icon="" ändrar ikon se exempel nedan */}
      {/* to="" för att ange sökväg */}

      <ThemeProvider theme={PatientTheme}>
        <PanelButton to="/" icon="qrcode">
          Scanna övning
        </PanelButton>
      </ThemeProvider>
      <br />

      <ThemeProvider theme={AdminTheme}>
        <PanelButton to="/" icon="search_exercise">
          Search Exercise
        </PanelButton>
      </ThemeProvider>
      <br />

      <StyledH2>Buttons</StyledH2>
      <br />
      <ThemeProvider theme={PatientTheme}>
        <StyledP>Patient Theme</StyledP>

        <Button>Small</Button>
        <br />
        <Button icon="user">Small with Icon</Button>
        <Button size="lg">Large</Button>
      </ThemeProvider>

      <ThemeProvider theme={AdminTheme}>
        <StyledP>Admin Theme</StyledP>
        <Button>Small</Button>
        <br />
        <Button icon="user">Small with Icon</Button>
        <Button size="lg">Large</Button>
        <Button icon="user" size="lg">
          Large with Icon
        </Button>
        <StyledP>Outlined</StyledP>
        <Button outlined>Outlined small</Button>
        <Button outlined size="lg">
          Outlined Large
        </Button>
        <Button outlined size="lg" icon="user" color="black">
          Outlined Large
        </Button>
        <StyledP>Disabled</StyledP>
        <Button disabled>Disabled</Button>
        <Button disabled size="lg">
          Disabled
        </Button>
        <StyledP>disabledTooltip</StyledP>
        <Button disabledTooltip>Neutral small</Button>
        <Button disabledTooltip size="lg">
          Neutral large
        </Button>
        <Button disabledTooltip size="lg" icon="user">
          Neutral icon
        </Button>
        ;
      </ThemeProvider>
    </ShowcaseWrapper>
  );
};
export default Showcase;
