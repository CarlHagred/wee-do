import React, { useEffect, useState } from "react";
import styled from "styled-components";

import PatientLayout from "../../components/patient/PatientLayout";
import { getAllActivePatients, getOnePatient, getSession } from "../../api";

const StyledContainer = styled.div`
    text-align: left;
    margin: 2.3em;
`;

const StyledH2 = styled.h2`
    font-size: 5em;
    text-align: center;
    margin: 2% auto 2% auto;
    font-weight: 900;
`;

const StyledTitle = styled.p`
    font-weight: bold;
    font-size: 2em;
    margin-top: 1%;
    margin-bottom: 1%;
`;

const StyledP = styled.p`
    font-size: 1.5em;
    margin-top: 1%;
    margin-bottom: 1%;
`;

const StyledLi = styled.li`
    font-size: 1.5em;
    margin-top: 1%;
    margin-bottom: 1%;
`;

const StyledDiv = styled.div`
    width: 80%;
    margin: 0% auto 4% auto;
`;


const Help = () => {
    
    const [patient, setPatient] = useState("");
    const [active, setActive] = useState([]); 

    let phoneNr = "077-67 30 000"

    const getActivity = async () => {
        try {
            const currentActivity = await getAllActivePatients()
            if(!currentActivity.data) {
                throw new Error(`fucking fel brur ${currentActivity.status}`)
            }
            if(currentActivity){
                setActive(currentActivity.data[0].name);
            }
        }
        catch(e) {
        
        }
    }

    const getPatient = async () => {
        try {
            const currentPatient = await getSession();
            if(!currentPatient) {
                throw new Error(`fucking fel brur ${currentPatient.status}`)
            }
            if(currentPatient){
                setPatient(currentPatient.data.name)
            }
        }
        catch(e) {
            
        }
    }

    getActivity();
    getPatient();
    
    return (
        <PatientLayout>
            <StyledContainer>
                <StyledH2>Hjälp</StyledH2>
                <StyledDiv>
                    <StyledTitle>
                            Jag har tappat bort mitt användarnamn eller QR-kod:
                    </StyledTitle>
                    <StyledP>
                        Om du har tappat bort ditt användarnamn eller QR-kod måste
                        du komma i kontakt med sjukhuset du besökte när du fick ditt
                        användarnamn eller QR-kod och be om ett nytt.
                    </StyledP>
                </StyledDiv>

                <StyledDiv>
                    <StyledTitle>
                        Jag kan inte skanna in min QR-kod:
                    </StyledTitle>
                    <StyledP>
                        Om det inte fungerar att skanna in QR-koden, kontrollera
                        följande:
                    </StyledP>

                    <StyledLi>Kontrollera så att din kamera fungerar.</StyledLi>
                    <StyledLi>
                        Har du accepterat (ja/nej) att webbsidan får använda sig av
                        din kamera?
                    </StyledLi>
                    <StyledLi>
                        Om du inte har det, gå till din webbläsare {">"}{" "}
                        Inställningar {">"} Integritet och säkerhet {">"}{" "}
                        Webbplatsinställningar {">"} Kamera och godkänn användningen
                        av din kamera-enhet.
                    </StyledLi>
                    <StyledLi>
                        Testa att öka ljusstyrkan på skärmen du skannar din QR-kod
                        på, eller testa att öka ljusstyrkan i rummet.
                    </StyledLi>
                    <StyledLi>Stödjer din enhet skanning av QR-koder?</StyledLi>
                </StyledDiv>

                <StyledDiv>
                    <StyledTitle>Det fungerar inte att logga in:</StyledTitle>
                    <StyledP>
                        Om det inte fungerar att logga in, kontrollera följande:
                    </StyledP>

                    <StyledLi>Kontrollera att ditt användarnamn stämmer, 6 tecken.</StyledLi>
                    <StyledLi>Kontrollera din nätverksanslutning</StyledLi>
                    {patient === active ? 
                    <StyledLi>
                        Om det fortfarande inte fungerar, kontakta Region Skånes
                        Servicedesk Telefon: {phoneNr}, knappval 2 (IT) följt av
                        5 (övrigt).
                    </StyledLi> 
                    :
                    null
                    }
                </StyledDiv>
            </StyledContainer>
        </PatientLayout>
    );
};
export default Help;
