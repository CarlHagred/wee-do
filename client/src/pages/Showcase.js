import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "../components/Styled/Button";
import Title from "../components/Styled/Title";
import Paragraph from "../components/Styled/Paragraph";
import AdminTheme from "../Themes/AdminTheme";
import PatientTheme from "../Themes/PatientTheme";

const Wrapper = styled.section`
  text-align: center;
`;

const Showcase = () => {
  return (
    <Fragment>
      <Wrapper>
        <Title>WeeDo</Title>
        <Paragraph>Styled Components</Paragraph>
      </Wrapper>

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
    </Fragment>
  );
};
export default Showcase;
