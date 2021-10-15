import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import Button from "../../components/Styled/Button";
import PatientTheme from "../../Themes/PatientTheme";
import { getPatient, loginPatient } from "../../api/index";


const LoginPatient = () => {
    const [loginUser, setLogin] = useState("Du är inte inloggad")
    const [data, setData] = useState(null);

    const testaLogin = async () => {
      
      const name = document.getElementById("login").value;
      console.log(name);

      const patient = await getPatient();
      if (name === patient){
        await loginPatient();
        console.log(patient);
      }
      setLogin(`Patienten är inloggad, namn: ${name}`)
      console.log(patient);
    }


    const handleEvent = async (event) => {
      const testa = event;
      console.log(testa);
      const patient = await getPatient();
      if(loginUser === patient){
        console.log("Patienten matchar")
        await loginPatient();
      }
      console.log("Hittat alla");
      console.log(patient);
      //const patientislogin = await loginPatient();
      //console.log("patientislogin");
      setLogin(`Patienten är inloggad, namn: ${patient.data}`)
    }
 
    return (
      <div >
        <input type="text" name="name" id="login" placeholder="Ange Användarnamn... "
        onChange={(e) => setLogin(e.target.value)}>
        </input>
        <hr/>
        <div>
            <ThemeProvider theme={PatientTheme}>
                    <Button onClick={testaLogin}>Logga in</Button>
            </ThemeProvider>
        </div>
        <p>Användare: {loginUser}</p>

      </div>
      
    );
  };
  
  export default LoginPatient;