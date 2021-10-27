import React from "react";
import { ThemeProvider } from "styled-components";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";
import PatientTheme from "../../themes/PatientTheme";

const About = () => {
  return (
    <>
    <Header></Header>
      <strong><h1>Om WeeDo:</h1></strong>
      <br/>
      <p>WeeDo är ett samarbete mellan Region Skåne och Malmö Universitetet.</p>
      <p>Vi är en grupp studenter som går vårt sista år som Informationsarkitekter och Systemutvecklare. 
      För vårt examensprojekt blev vi utvalda att samarbeta med Region Skåne för att utveckla en webbapplikation för att 
      brygga avståndet mellan patienter och dess fysioterapefter. Under och efter Covid-19 pandemin är sjukhussängar en bristvara 
      vilket leder till att vårdpersonalen blir överbelastade samt att nya patienter som behöver vård helt enkelt inte kan få den vård de behöver. 
      Därför ville Region Skåne göra en webbapplikation för att kunna ge patienter möjlighet till att sköta återhämtning och fysioterapi från sitt eget hem, 
      samtidigt som man bibehåller en kontinuerlig kontakt med sin fysioterapeft. </p>
      <br/>
      <p><strong>Vill du veta mer Malmö Universitet och om de två programmen, följ länkarna nedan:</strong></p>
      <br/>
      <a href="https://mau.se/">Malmö Universitet</a>
      <br/>
      <a href="https://mau.se/sok-utbildning/program/tgiaa/">Informationsarkitektur</a>
      <br/>
      <a href="https://mau.se/sok-utbildning/program/tgsya/">Systemutveckling</a>
      <br/>
      <ThemeProvider theme={PatientTheme}>
        <Button>
          <Link to="/">Tillbaka</Link>
        </Button>
      </ThemeProvider>
    <Footer></Footer>
    </>
  );
};
export default About;
