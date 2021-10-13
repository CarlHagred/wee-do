import React from "react";
import { ThemeProvider } from "styled-components";
import Button from "../../components/Styled/Button"
import PatientTheme from "../../Themes/PatientTheme";
import { loginPatient } from "../../api/index";


const LoginPatient = () => {

    const handleEvent = async () => {
        const patientUser = await loginPatient();
        console.log(patientUser.data);
        console.log("Patienten är inloggad");
        
      };
  
    return (
      <form action="/" method="POST">
        <input type="text" id="login" placeholder="Ange Användarnamn... ">
        </input>
        <hr/>
        <div>
            <ThemeProvider theme={PatientTheme}>
                    <Button onClick={handleEvent}>Logga in</Button>
            </ThemeProvider>
        </div>
      </form>
    );
  };
  
  export default LoginPatient;