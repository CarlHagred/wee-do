import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div>
      <h2>Hjälp</h2>
      <br />
      <p>
        Jag har tappat bort mitt användarnamn eller QR-kod:
        Om du har tappat bort ditt användarnamn eller QR-kod måste du komma i kontakt med sjukhuset du besökte när du fick ditt användarnamn eller QR-kod och be om ett nytt. 

        <strong>Jag kan inte skanna in min QR-kod:</strong>
        Om det inte fungerar att skanna in QR-koden, kontrollera följande:
        Kontrollera så att din kamera fungerar.
        Har du accepterat (ja/nej) att webbsidan får använda sig av din kamera?
        Om du inte har det, gå till din webbläsare `{">"}` Inställningar `{">"}` Integritet och säkerhet `{">"}` Webbplatsinställningar `{">"}` Kamera och godkänn användningen av din kamera-enhet.
        Testa att öka ljusstyrkan på skärmen du skannar din QR-kod på, eller testa att öka ljusstyrkan i rummet.
        Stödjer din enhet skanning av QR-koder?

        <strong>Det fungerar inte att logga in:</strong>
        Om det inte fungerar att logga in, kontrollera följande:
        Kontrollera att ditt användarnamn stämmer, 6 tecken. 
        Kontrollera din nätverksanslutning

        Om det fortfarande inte fungerar, kontakta Region Skånes Servicedesk
        Telefon: 077-67 30 000, knappval 2 (IT) följt av 5 (övrigt).

      </p>

      <ul>
        <Link to="/">Tillbaka till förstasidan</Link>
      </ul>
    </div>
  );
};
export default Help;
