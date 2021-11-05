import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Button from "../common/Button";
import UserInput from "../common/UserInput";
import PatientTheme from "../../themes/PatientTheme";
import { loginPatient } from "../../api";

const LoginPatient = () => {
  let isCookie = localStorage.getItem("isAuthenticatedPatient")
  if(isCookie !== null){
    localStorage.clear();
    window.location.reload();
  }

  const [loginName, setLoginName] = useState("");
  const handleSubmit = () => {
    console.log(`försöker logga in med ${loginName}`);
    const postData = {
      name: loginName,
    };

    loginPatient(postData);
    localStorage.clear()
  };

  return (
    <div>
      <ThemeProvider theme={PatientTheme}>
        <span id="patientError"></span>
        <UserInput
          theme={PatientTheme}
          type="text"
          name="name"
          id="loginPatient"
          onChange={(e) => setLoginName(e.target.value)}
          placeholder="Skriv användarnamn här..."
        ></UserInput>
        <Button onClick={handleSubmit}>Logga in</Button>
      </ThemeProvider>
    </div>
  );
};

export default LoginPatient;
