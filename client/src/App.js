import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* ===== Common Pages ===== */
import NotFoundPage from "./pages/common/404";
import About from "./pages/common/About";
import Help from "./pages/common/Help";

/* ===== Patient Pages ===== */
import PatientLogin from "./pages/patient/PatientLogin.js";
import PatientActivityPanel from "./pages/patient/PatientActivityPanel";
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
  const basename = process.env.REACT_APP_BASENAME || null;
  return (
    <Router basename={basename}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/weedo" component={PatientLogin} />
        <Route exact path="/weedo/watch" component={WatchExercise} />
        <ProtectedRoutePatient
          exact
          path="/weedo/activitypanel"
          component={PatientActivityPanel}
        />
        <ProtectedRoutePatient
          exact
          path="/weedo/QrScanner"
          component={QrScanner}
        />
        <ProtectedRoutePatient
          exact
          path="/weedo/statistics"
          component={Statistics}
        />
        <Route exact path="/weedo/admin" component={AdminLogin} />
        <ProtectedRouteAdmin
          exact
          path="/weedo/adminpanel"
          component={AdminPanel}
        />
        <ProtectedRouteAdmin
          exact
          path="/weedo/admin/register/exercise"
          component={RegisterExercise}
        />
        <ProtectedRouteAdmin
          exact
          path="/weedo/admin/register/patient"
          component={RegisterPatient}
        />
        <ProtectedRouteAdmin
          exact
          path="/weedo/admin/statistics/:name"
          component={PatientStatistics}
        />
        <ProtectedRouteAdmin
          exact
          path="/weedo/admin/search/exercise"
          component={SearchExercise}
        />
        <ProtectedRouteAdmin
          exact
          path="/weedo/admin/exercise/:videoId"
          component={Video}
        />
        <ProtectedRouteAdmin
          exact
          path="/weedo/admin/search/patient"
          component={SearchPatient}
        />
        <ProtectedRouteAdmin
          exact
          path="/weedo/admin/exercise/qrpreview/:id"
          component={QRPreview}
        />
        <Route exact path="/weedo/help" component={Help} />
        <Route exact path="/weedo/test" component={QRPreview} />
        <Route exact path="/weedo/about" component={About} />
        <Route exact path="/weedo/showcase" component={Showcase} />
        <ProtectedRouteAdmin
          exact
          path="/weedo/success"
          component={UploadSucceeded}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
