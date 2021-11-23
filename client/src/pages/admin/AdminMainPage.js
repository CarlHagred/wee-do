import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminLayout from "../../components/admin/AdminLayout";

/* ===== Common Pages ===== */
import About from "../common/About";
import Help from "../common/Help";

/* ===== Admin Pages ===== */
import AdminPanel from "./AdminPanel";
import PatientStatistics from "./PatientStatistics";
import RegisterExercise from "./RegisterExercise";
import RegisterPatient from "./RegisterPatient";
import SearchExercise from "./SearchExercise";
import SearchPatient from "./SearchPatient";
import { ProtectedRouteAdmin } from "../../components/protectedRoutes/ProtectedRoutesAdmin";

function AdminMainPage() {
  return (
    <Router>
      <AdminLayout>
        <Switch>
          <ProtectedRouteAdmin path="/admin/mainpage" component={AdminPanel} />

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
            path="/admin/search/patient"
            component={SearchPatient}
          />

          <Route exact path="/help" component={Help} />
          <Route exact path="/about" component={About} />
        </Switch>
      </AdminLayout>
    </Router>
  );
}

export default AdminMainPage;
