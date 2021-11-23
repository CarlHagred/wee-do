import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import PatientLayout from "../../components/patient/PatientLayout";

/* ===== Common Pages ===== */
import About from "../common/About";
import Help from "../common/Help";

/* ===== Patient Pages ===== */
import PatientPanel from "./PatientPanel";
import QrScanner from "./QrScanner";
import Statistics from "./Statistics";
import { ProtectedRoutePatient } from "../../components/protectedRoutes/ProtectedRoutesPatient";

const TestHeader = styled.h1`
  text-align: center;
  font-size: 2em;
  margin-top: 50px;
`;

function PatientMainPage() {
  return (
    <Router>
      <PatientLayout>
        <TestHeader>Här läggs innehållet från de olika sidorna!</TestHeader>
        <Switch>
          <ProtectedRoutePatient
            exact
            path="/patientpanel"
            component={PatientPanel}
          />
          <ProtectedRoutePatient
            exact
            path="/QrScanner"
            component={QrScanner}
          />
          <ProtectedRoutePatient
            exact
            path="/statistics"
            component={Statistics}
          />

          <Route exact path="/help" component={Help} />
          <Route exact path="/about" component={About} />
        </Switch>
      </PatientLayout>
    </Router>
  );
}

export default PatientMainPage;
