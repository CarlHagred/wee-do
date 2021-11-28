import React, { useState } from "react";

import { loginPatient } from "../../api";

import PatientTheme from "../../themes/PatientTheme";

import Button from "../common/Button";
import UserInput from "../common/UserInput";

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
        let key = 13
        if(event.keyCode === key){
            handleSubmit();
        }
    };

    return (
        <>
            <span id="patientError" />
            <UserInput
                theme={PatientTheme}
                type="text"
                name="name"
                id="loginPatient"
                onKeyDown={listener}
                onChange={(e) => setLoginName(e.target.value)}
                placeholder="Skriv användarnamn här..."
            ></UserInput>
            <Button onClick={handleSubmit}>Logga in</Button>
        </>
    );
};

export default LoginPatient;
