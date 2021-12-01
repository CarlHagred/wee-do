import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminLayout from "../../components/admin/AdminLayout";

/* ===== Common Pages ===== */
import About from "../common/About";
import Help from "../common/Help";

/* ===== Admin Pages ===== */
import { ProtectedRouteAdmin } from "../../components/protectedRoutes/ProtectedRoutesAdmin";
import AdminPanel from "./AdminPanel";
import PatientStatistics from "./PatientStatistics";
import RegisterExercise from "./RegisterExercise";
import RegisterPatient from "./RegisterPatient";
import SearchExercise from "./SearchExercise";
import SearchPatient from "./SearchPatient";

import UploadSucceeded from "./UploadSucceeded";
import QRPreview from "./QRPreview";
import Video from "./Video";

import WatchExercise from "../../components/patient/WatchingVideo";

function AdminMainPage() {
  return (
    <Router>
      <AdminLayout>
        <Switch>
          <ProtectedRouteAdmin
            exact
            path="/admin/mainpage"
            component={AdminPanel}
          />

          <ProtectedRouteAdmin
            exact
            path="/admin/register/exercise"
            component={RegisterExercise}
          />

          <ProtectedRouteAdmin
            exact
            path="/success"
            component={UploadSucceeded}
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

          <Route exact path="/watch" component={WatchExercise} />

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

          <Route exact path="/test" component={QRPreview} />

          <Route exact path="/help" component={Help} />
          <Route exact path="/about" component={About} />
        </Switch>
      </AdminLayout>
    </Router>
  );
}

export default AdminMainPage;
