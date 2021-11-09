import React from "react";
import styled from "styled-components"
import WdLogo from "../../components/images/WdLogo"
import { ThemeProvider } from "styled-components";
import PatientLayout from "../../components/patient/PatientLayout"
import Footer from "../../components/common/Footer";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";
import PatientTheme from "../../themes/PatientTheme";

const StyledContainter = styled.div`
  text-align: left;
  margin: 2.3em;
`

const StyledH2 = styled.h2`
  font-size: 30px;
  text-align: center;
  padding: 10px;
  font-weight: 600;
`

const Help = () => {
  return (
    <>
      <PatientLayout>
      <ThemeProvider theme={PatientTheme}>
      <StyledContainter>
        <WdLogo></WdLogo>
        <StyledH2>Hjälp</StyledH2>
        <p><strong>Jag har tappat bort mitt användarnamn eller QR-kod:</strong></p>
        <p>
          Om du har tappat bort ditt användarnamn eller QR-kod måste du komma i kontakt med sjukhuset du besökte när du fick ditt användarnamn eller QR-kod och be om ett nytt. 
        </p>
        <br/>
        <p><strong>Jag kan inte skanna in min QR-kod:</strong></p>
        <p>Om det inte fungerar att skanna in QR-koden, kontrollera följande:</p>
        
        
        <li>Kontrollera så att din kamera fungerar.</li>
        <li>Har du accepterat (ja/nej) att webbsidan får använda sig av din kamera?</li> 
        <li>Om du inte har det, gå till din webbläsare {">"} Inställningar {">"} Integritet och säkerhet {">"} Webbplatsinställningar {">"} Kamera och godkänn användningen av din kamera-enhet.</li>
        <li>Testa att öka ljusstyrkan på skärmen du skannar din QR-kod på, eller testa att öka ljusstyrkan i rummet.</li>
        <li>Stödjer din enhet skanning av QR-koder?</li>
            
        <br/>
        <strong>Det fungerar inte att logga in:</strong>
        <p>Om det inte fungerar att logga in, kontrollera följande:</p>
        
          <li>
            Kontrollera att ditt användarnamn stämmer, 6 tecken. 
          </li>
          <li>
            Kontrollera din nätverksanslutning
          </li>
          <li>
            Om det fortfarande inte fungerar, kontakta Region Skånes Servicedesk
            Telefon: 077-67 30 000, knappval 2 (IT) följt av 5 (övrigt).
          </li>
          <br/>
        </StyledContainter>
            <Button>
            <Link to="/">Tillbaka</Link>
            </Button>
            <Footer></Footer>
      </ThemeProvider>
    </PatientLayout> 
    </>
  );
};
export default Help;
