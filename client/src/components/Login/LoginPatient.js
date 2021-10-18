import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import { ThemeProvider } from "styled-components";
import Button from "../../components/Styled/Button";
import PatientTheme from "../../Themes/PatientTheme";
import { loginPatient, getPatient } from "../../api";


const LoginPatient = () => {
    const [loginUser, setLogin] = useState("Du är inte inloggad")
    const history = useHistory();

    const loginNewPatient = async (username) => {
      
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

    const getAPatient = async (username) => {
      
      const name = document.getElementById("login").value;
      console.log(name);

      const params = {
        username: name
      }

      const patient = await getPatient(params);
      
      console.log(patient);
      setLogin(`Patienten är inloggad, namn: ${patient}`)

      if(username.toString){
        history.push('/')
      }
    }
    
    
    
 
    return (
      <div >
        <input type="text" name="name" id="login" placeholder="Ange Användarnamn... "
        onChange={(e) => setLogin(e.target.value)}>
        </input>
        <hr/>
        <div>
            <ThemeProvider theme={PatientTheme}>
                    <Button onClick={loginNewPatient}>Logga in</Button>
            </ThemeProvider>

            <ThemeProvider theme={PatientTheme}>
                    <Button onClick={getAPatient}>Hämta Användare</Button>
            </ThemeProvider>
        </div>
        <p>Användare: {loginUser}</p>

      </div>
      
    );
};
  
export default LoginPatient;