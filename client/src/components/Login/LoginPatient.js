import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import { ThemeProvider } from "styled-components";
import Button from "../../components/Styled/Button";
import PatientTheme from "../../Themes/PatientTheme";
import { loginPatient } from "../../api/index";


const LoginPatient = () => {
    const [loginUser, setLogin] = useState("Du är inte inloggad")
    const history = useHistory();

    const testaLogin = async (username) => {
      
      const name = document.getElementById("login").value;
      console.log(name);

      const params = {
        username: name
      }

      const patient = await loginPatient(params);
      
      console.log(patient);
      setLogin(`Patienten är inloggad, namn: ${patient}`)


      if(username.toString){
        history.push('/')
      }
    }
    
      


      /*const patient = await getPatient();
      if (name === patient){
        await loginPatient();
        console.log(patient);
      }*/
    

      /*
      const handleEvent = async (event, username) => {
        const name = document.getElementById("login")
        const patient = await getPatient(name);
        if(loginUser === patient){
          console.log("Patienten matchar")
          await loginPatient();
        }
        console.log(patient);
        //const patientislogin = await loginPatient();
        //console.log("patientislogin");
        setLogin(`Patienten är inloggad, namn: ${patient}`)
      }*/
    
 
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