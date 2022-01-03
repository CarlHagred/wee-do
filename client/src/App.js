import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* ===== Common Pages ===== */
import NotFoundPage from "./pages/common/404";

/* ===== Patient Pages ===== */
import PatientLogin from "./pages/patient/PatientLogin.js";
import PatientPanel from "./pages/patient/PatientPanel";
import QrScanner from "./pages/patient/QrScanner";
import Statistics from "./pages/patient/Statistics";
import ToDo from "./pages/patient/ToDo";
import PatientHelp from "./pages/patient/PatientHelp";
import PatientAbout from "./pages/patient/PatientAbout";

/* ===== Admin Pages ===== */
import AdminLogin from "./pages/admin/AdminLogin";
import AdminPanel from "./pages/admin/AdminPanel";
import AdminHelp from "./pages/admin/AdminHelp";
import AdminAbout from "./pages/admin/AdminAbout";
import PatientStatistics from "./pages/admin/PatientStatistics";
import RegisterExercise from "./pages/admin/RegisterExercise";
import RegisterPatient from "./pages/admin/RegisterPatient";
import SearchExercise from "./pages/admin/SearchExercise";
import SelectExercises from "./pages/admin/SelectExercises";
import SearchPatient from "./pages/admin/SearchPatient";
import UploadSucceeded from "./pages/admin/UploadSucceeded";
import QRPreview from "./pages/admin/QRPreview";
import Video from "./pages/admin/Video";
import WatchExercise from "./components/patient/WatchingVideo";
import { ProtectedRouteAdmin } from "./components/protectedRoutes/ProtectedRoutesAdmin";
import { ProtectedRoutePatient } from "./components/protectedRoutes/ProtectedRoutesPatient";

// Ta bort senare endast för showcase av components
import Showcase from "./pages/Showcase";
import UploadError from "./pages/admin/UploadError";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={PatientLogin} />
        <Route exact path="/watch" component={WatchExercise} />

        <Route exact path="/help" component={PatientHelp} />
        <Route exact path="/about" component={PatientAbout} />

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
        <ProtectedRoutePatient exact path="/todo" component={ToDo} />
        <Route exact path="/admin" component={AdminLogin} />
        <ProtectedRouteAdmin exact path="/adminpanel" component={AdminPanel} />

        <ProtectedRouteAdmin exact path="/admin/help" component={AdminHelp} />
        <ProtectedRouteAdmin exact path="/admin/about" component={AdminAbout} />

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
          path="/admin/select/:name"
          component={SelectExercises}
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
          path="/admin/exercise/qrpreview/:id/:patient"
          component={QRPreview}
        />

        <Route exact path="/test" component={QRPreview} />
        <Route exact path="/showcase" component={Showcase} />
        <ProtectedRouteAdmin
          exact
          path="/success"
          component={UploadSucceeded}
        />
        <ProtectedRouteAdmin exact path="/error" component={UploadError} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
