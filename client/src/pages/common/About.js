import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import WdLogo from "../../components/images/WdLogo";
import PatientLayout from "../../components/patient/PatientLayout";
import Button from "../../components/common/Button";

const StyledH2 = styled.h2`
    text-align: center;
    font-weight: 600;
    font-size: 30px;
`;

const StyledContainter = styled.div`
    text-align: left;
    margin: 2.3em;
`;

const About = () => {
    return (
        <>
            <PatientLayout>
                <WdLogo />
                <StyledContainter>
                    <StyledH2>Om WeeDo:</StyledH2>
                    <br />
                    <p>
                        WeeDo är ett samarbete mellan Region Skåne och Malmö
                        Universitetet.
                    </p>
                    <p>
                        Vi är en grupp studenter som går vårt sista år som
                        Informationsarkitekter och Systemutvecklare. För vårt
                        examensprojekt blev vi utvalda att samarbeta med Region
                        Skåne för att utveckla en webbapplikation för att brygga
                        avståndet mellan patienter och dess fysioterapefter.
                        Under och efter Covid-19 pandemin är sjukhussängar en
                        bristvara vilket leder till att vårdpersonalen blir
                        överbelastade samt att nya patienter som behöver vård
                        helt enkelt inte kan få den vård de behöver. Därför
                        ville Region Skåne göra en webbapplikation för att kunna
                        ge patienter möjlighet till att sköta återhämtning och
                        fysioterapi från sitt eget hem, samtidigt som man
                        bibehåller en kontinuerlig kontakt med sin
                        fysioterapeft.{" "}
                    </p>
                    <br />
                    <p>
                        <strong>
                            Vill du veta mer Malmö Universitet och om de två
                            programmen, följ länkarna nedan:
                        </strong>
                    </p>
                    <br />
                    <a href="https://mau.se/">Malmö Universitet</a>
                    <br />
                    <a href="https://mau.se/sok-utbildning/program/tgiaa/">
                        Informationsarkitektur
                    </a>
                    <br />
                    <a href="https://mau.se/sok-utbildning/program/tgsya/">
                        Systemutveckling
                    </a>
                    <br />
                </StyledContainter>
                <Button>
                    <Link to="/">Tillbaka</Link>
                </Button>
            </PatientLayout>
        </>
    );
};

export default About;
