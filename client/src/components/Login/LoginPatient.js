import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import Button from "../../components/Styled/Button";
import PatientTheme from "../../Themes/PatientTheme";
import { loginPatient } from "../../api/index";


const LoginPatient = () => {
    const [login, setLogin] = useState("Du är inte inloggad")

    const handleEvent = async () => {
      const loginNewPatient = await loginPatient();
      console.log(loginNewPatient.data);
      setLogin(`Patienten är inloggad, namn: ${loginNewPatient.data}`)
    }
    /*
    const handleEvent = async () => {
        const patientUser = await loginPatient();
        setLogin(patientUser.data)
        console.log(patientUser.data);
        setLogin('Patienten är inloggad')
      };*/
 
    return (
      <form action="/login" method="POST">
        <input type="text" id="login" placeholder="Ange Användarnamn... "
        onChange={(e) => setLogin(e.target.value)}>
        </input>
        <hr/>
        <div>
            <ThemeProvider theme={PatientTheme}>
                    <Button onClick={handleEvent} >Logga in</Button>
            </ThemeProvider>
        </div>
        <p>Användare: {login}</p>

      </form>
    );
  };
  
  export default LoginPatient;