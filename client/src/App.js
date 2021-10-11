import React, { component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//Pages
import MainPage from "./pages/MainPage";
import Activities from "./pages/Activities";
import ScanQr from "./pages/Scanner";
import Exercises from "./pages/Exercises";
import NotFoundPage from "./pages/404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/activities" component={Activities}></Route>
        <Route exact path="/scanner" component={ScanQr}></Route>
        <Route exact path="/exercises" component={Exercises}></Route>
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
