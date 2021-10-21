import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Styling
import { ThemeProvider } from "styled-components";
import AdminTheme from "./styling/themes/AdminTheme";
import PatientTheme from "./styling/themes/PatientTheme";

//Components
import Layout from "./styling/Layout";

//Common Pages
import NotFoundPage from "./pages/common/404";
import About from "./pages/common/About";
import Help from "./pages/common/Help";

//Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import PatientStatistics from "./pages/admin/PatientStatistics";
import RegisterExercise from "./pages/admin/RegisterExercise";
import RegisterPatient from "./pages/admin/RegisterPatient";
import SearchExercise from "./pages/admin/SearchExercise";
import SearchPatient from "./pages/admin/SearchPatient";

//Patient Pages
import PatientLogin from "./pages/patient/PatientLogin.js";
import PatientActivityPanel from "./pages/patient/PatientActivityPanel";
import QrScanner from "./pages/patient/QrScanner";

// Ta bort senare endast för showcase av components
import Showcase from "./pages/Showcase";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Layout>
          <ThemeProvider theme={AdminTheme}>
            <Route exact path="/admin/" component={AdminLogin} />
            <Route
              exact
              path="/admin/statistik"
              component={PatientStatistics}
            />
            <Route
              exact
              path="/admin/register/exercise"
              component={RegisterExercise}
            />
            <Route
              exact
              path="/admin/register/patient"
              component={RegisterPatient}
            />
            <Route
              exact
              path="/admin/search/exercise"
              component={SearchExercise}
            />
            <Route
              exact
              path="/admin/search/patient"
              component={SearchPatient}
            />
          </ThemeProvider>

          <ThemeProvider theme={PatientTheme}>
            <Route
              exact
              path="/activitypanel"
              component={PatientActivityPanel}
            />
            <Route exact path="/" component={PatientLogin} />
            <Route exact path="/QrScanner" component={QrScanner} />
          </ThemeProvider>

          <Route exact path="/help" component={Help} />
          <Route exact path="/about" component={About} />
          <Route exact path="/showcase" component={Showcase} />
        </Layout>
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
