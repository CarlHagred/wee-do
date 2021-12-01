import React from "react";
import GlobalStyle from "./globalStyle";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

/* ===== Common Pages ===== */
import NotFoundPage from "./pages/common/404";
import About from "./pages/common/About";
import Help from "./pages/common/Help";

/* ===== Patient Pages ===== */
import PatientLogin from "./pages/patient/PatientLogin.js";
import PatientPanel from "./pages/patient/PatientPanel";
import QrScanner from "./pages/patient/QrScanner";
import Statistics from "./pages/patient/Statistics";

/* ===== Admin Pages ===== */
import AdminLogin from "./pages/admin/AdminLogin";
import AdminPanel from "./pages/admin/AdminPanel";
import PatientStatistics from "./pages/admin/PatientStatistics";
import RegisterExercise from "./pages/admin/RegisterExercise";
import RegisterPatient from "./pages/admin/RegisterPatient";
import SearchExercise from "./pages/admin/SearchExercise";
import SearchPatient from "./pages/admin/SearchPatient";
import UploadSucceeded from "./pages/admin/UploadSucceeded";
import QRPreview from "./pages/admin/QRPreview";
import Video from "./pages/admin/Video";
import WatchExercise from "./components/patient/WatchingVideo";
import { ProtectedRouteAdmin } from "./components/protectedRoutes/ProtectedRoutesAdmin";
import { ProtectedRoutePatient } from "./components/protectedRoutes/ProtectedRoutesPatient";

// Ta bort senare endast för showcase av components
import Showcase from "./pages/Showcase";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={PatientLogin} />
        <Route exact path="/watch" component={WatchExercise} />
        <ProtectedRoutePatient
          exact
          path="/activitypanel"
          component={PatientPanel}
        />
        <ProtectedRoutePatient exact path="/QrScanner" component={QrScanner} />
        <ProtectedRoutePatient
          exact
          path="/statistics"
          component={Statistics}
        />
        <Route exact path="/admin" component={AdminLogin} />
        <ProtectedRouteAdmin exact path="/adminpanel" component={AdminPanel} />
        <ProtectedRouteAdmin
          exact
          path="/admin/register/exercise"
          component={RegisterExercise}
        />
        <ProtectedRouteAdmin
          exact
          path="/admin/register/patient"
          component={RegisterPatient}
        />
        <ProtectedRouteAdmin
          exact
          path="/admin/statistics/:name"
          component={PatientStatistics}
        />
        <ProtectedRouteAdmin
          exact
          path="/admin/search/exercise"
          component={SearchExercise}
        />
        <ProtectedRouteAdmin
          exact
          path="/admin/exercise/:videoId"
          component={Video}
        />
        <ProtectedRouteAdmin
          exact
          path="/admin/search/patient"
          component={SearchPatient}
        />
        <ProtectedRouteAdmin
          exact
          path="/admin/exercise/qrpreview/:id"
          component={QRPreview}
        />
        <Route exact path="/:help" component={Help} />
        <Route exact path="/test" component={QRPreview} />
        <Route exact path="/about" component={About} />
        <Route exact path="/showcase" component={Showcase} />
        <ProtectedRouteAdmin
          exact
          path="/success"
          component={UploadSucceeded}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
