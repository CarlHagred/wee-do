import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
import Statistics from "./pages/Statistics";
import { ThemeProvider } from "styled-components";
import AdminTheme from "./themes/AdminTheme";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Layout>
          <ThemeProvider theme={AdminTheme}>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/activities" component={Activities} />
            <Route exact path="/scanner" component={ScanQr} />
            <Route exact path="/exercises" component={Exercises} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/about" component={About} />
            <Route exact path="/showcase" component={Showcase} />
            <Route exact path="/statistik/:name" component={Statistics} />
          </ThemeProvider>
        </Layout>
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
