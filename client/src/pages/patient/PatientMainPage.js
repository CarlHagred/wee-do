import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PatientLayout from "../../components/patient/PatientLayout";

/* ===== Common Pages ===== */
import About from "../common/About";
import Help from "../common/Help";

/* ===== Patient Pages ===== */
import PatientPanel from "./PatientPanel";
import QrScanner from "./QrScanner";
import WatchingExercise from "./WatchingExercise";
import Statistics from "./Statistics";
import { ProtectedRoutePatient } from "../../components/protectedRoutes/ProtectedRoutesPatient";

function PatientMainPage() {
  return (
    <Router>
      <PatientLayout>
        <Switch>
          <ProtectedRoutePatient
            exact
            path="/mainpage"
            component={PatientPanel}
          />
          <ProtectedRoutePatient
            exact
            path="/QrScanner"
            component={QrScanner}
          />

          <ProtectedRoutePatient
            exact
            path="/watch"
            component={WatchingExercise}
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
