import React, { component } from "react";
import GlobalStyle from "./globalStyle";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//Components
import Layout from "./components/Layout";

//Pages
import MainPage from "./pages/MainPage";
import Activities from "./pages/Activities";
import ScanQr from "./pages/Scanner";
import Exercises from "./pages/Exercises";
import Help from "./pages/Help";
import About from "./pages/About";
import NotFoundPage from "./pages/404";
import Showcase from "./pages/Showcase";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Layout>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/scanner" component={ScanQr} />
          <Route exact path="/exercises" component={Exercises} />
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
