import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { loginPatient } from "../../api";

import PatientTheme from "../../themes/PatientTheme";

import Button from "../common/Button";
import { PatientInput } from "../common/UserInput";

const LoginContainer = styled.div`
  width: 100%;
`;

const LoginPatient = () => {
  let history = useHistory();
  let isCookie = localStorage.getItem("isAuthenticatedPatient");
  let history = useHistory();
  if (isCookie !== null) {
    history.push("/activitypanel");
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
  };

  return (
    <LoginContainer>
      <span id="patientError" />
      <PatientInput
        theme={PatientTheme}
        type="text"
        name="name"
        id="loginPatient"
        onKeyDown={listener}
        onChange={(e) => setLoginName(e.target.value)}
        placeholder="Skriv användarnamn här"
      />
      <Button width="wide" size="lg" onClick={handleSubmit}>
        Logga in
      </Button>
    </LoginContainer>
  );
};

export default LoginPatient;
