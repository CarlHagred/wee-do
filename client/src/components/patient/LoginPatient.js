import React, { useState } from "react";
import styled from "styled-components";

import { loginPatient } from "../../api";

import PatientTheme from "../../themes/PatientTheme";

import Button from "../common/Button";
import UserInput from "../common/UserInput";

const LoginWrapper = styled.div`
  max-width: 300px;
  margin: 0 0.8em;
  background-color: yellow;
`;

const LoginPatient = () => {
  let isCookie = localStorage.getItem("isAuthenticatedPatient");
  if (isCookie !== null) {
    localStorage.clear();
    window.location.reload();
  }

  const [loginName, setLoginName] = useState("");

  const handleSubmit = () => {
    console.log(`försöker logga in med ${loginName}`);
    const postData = {
      name: loginName.trim(),
    };

    loginPatient(postData);
    localStorage.clear();
  };

  const listener = (event) => {
    let key = 13;
    if (event.keyCode === key) {
      handleSubmit();
    }
  };

  return (
    <LoginWrapper>
      <span id="patientError" />
      <UserInput
        theme={PatientTheme}
        type="text"
        name="name"
        id="loginPatient"
        onKeyDown={listener}
        onChange={(e) => setLoginName(e.target.value)}
        placeholder="Skriv användarnamn här..."
      />
      <Button onClick={handleSubmit}>Logga in</Button>
    </LoginWrapper>
  );
};

export default LoginPatient;
