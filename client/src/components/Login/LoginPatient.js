import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Button from "../../components/Styled/Button";
import PatientTheme from "../../Themes/PatientTheme";
import { loginPatient } from "../../api";

const LoginPatient = () => {
  const [loginName, setLoginName] = useState("");

  const handleSubmit = () => {
    console.log(`försöker logga in med ${loginName}`);
    const postData = {
      name: loginName,
    };
    loginPatient(postData);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        id="login"
        placeholder="Ange Användarnamn... "
        onChange={(e) => setLoginName(e.target.value)}
      ></input>
      <hr />
      <div>
        <ThemeProvider theme={PatientTheme}>
          <Button onClick={handleSubmit}>Logga in</Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default LoginPatient;
