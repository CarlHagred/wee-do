import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* ===== Common Pages ===== */
import Help from "./pages/common/Help";
import About from "./pages/common/About";
import NotFoundPage from "./pages/common/404";

/* ===== Patient Pages ===== */
import PatientLogin from "./pages/patient/PatientLogin.js";
import { ProtectedRoutePatient } from "./components/protectedRoutes/ProtectedRoutesPatient";
import PatientMainPage from "./pages/patient/PatientMainPage";
import WatchingExercise from "../src/pages/patient/WatchingExercise";

/* ===== Admin Pages ===== */
import AdminLogin from "./pages/admin/AdminLogin";
import { ProtectedRouteAdmin } from "./components/protectedRoutes/ProtectedRoutesAdmin";
import AdminMainPage from "./pages/admin/AdminMainPage";

// Ta bort senare endast för showcase av components
import Showcase from "./pages/Showcase";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={PatientLogin} />
        <ProtectedRoutePatient
          exact
          path="/mainpage"
          component={PatientMainPage}
        />

        <Route exact path="/admin" component={AdminLogin} />
        <ProtectedRouteAdmin
          exact
          path="/admin/mainpage"
          component={AdminMainPage}
        />

        <Route exact path="/showcase" component={Showcase} />

        <Route exact path="/help" component={Help} />
        <Route exact path="/about" component={About} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
