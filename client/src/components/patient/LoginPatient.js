import React, { useState } from "react";
import styled from "styled-components";

import { loginPatient } from "../../api";

import PatientTheme from "../../themes/PatientTheme";

import Button from "../common/Button";
import { PatientInput } from "../common/UserInput";

const LoginContainer = styled.div`
  width: 100%;
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
      name: loginName.trim().toLowerCase(),
    };

    loginPatient(postData);
    localStorage.clear();
  };

  const listener = (event) => {
    let key = 13;
    if (event.keyCode === key) {
      handleSubmit();
    }
    if (event.keyCode === 38) {
      event.preventDefault();
    }
    if (event.keyCode === 40) {
      event.preventDefault();
    }
  };

  return (
    <LoginContainer>
      <span id="patientError" />
      <PatientInput
        theme={PatientTheme}
        type="number"
        name="name"
        id="loginPatient"
        onWheel={(event) => {
          event.currentTarget.blur();
        }}
        onKeyDown={listener}
        onChange={(e) => setLoginName(e.target.value)}
        placeholder="Skriv användar-id här..."
      />
      <Button width="wide" onClick={handleSubmit}>
        Logga in
      </Button>
    </LoginContainer>
  );
};

export default LoginPatient;
