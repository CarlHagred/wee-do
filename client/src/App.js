import React, { component } from "react";
import GlobalStyle from "./globalStyle";
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
import Showcase from "./pages/Showcase";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/activities" component={Activities}></Route>
        <Route exact path="/scanner" component={ScanQr}></Route>
        <Route exact path="/exercises" component={Exercises}></Route>
        <Route exact path="/showcase" component={Showcase}></Route>
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
