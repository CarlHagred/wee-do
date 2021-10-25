import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Button from "../common/Button";
import UserInput from "../common/UserInput";
import PatientTheme from "../../themes/PatientTheme";
import { loginPatient, logoutPatient } from "../../api";

const LoginPatient = () => {
  const [loginName, setLoginName] = useState("");
  const handleSubmit = () => {
    console.log(`försöker logga in med ${loginName}`);
    const postData = {
      name: loginName,
    };
    
    loginPatient(postData)

    
  };

  return (
    <div>
      <p></p>
      <ThemeProvider theme={PatientTheme}>
        <UserInput theme={PatientTheme}
         type="text" name="name" 
         id="login" 
         onChange={(e) => setLoginName(e.target.value)} 
         placeholder="Skriv användarnamn här...">
        </UserInput>
        <Button onClick={handleSubmit}>Logga in</Button>
      </ThemeProvider>
    </div>
  );
};

export default LoginPatient;
