import React, {component} from 'react'; 
import 
{
  BrowserRouter as Router, Route, Switch, Redirect
} 
from 'react-router-dom'; 

//Pages
import MainPage from './pages/MainPage';
import Activities from './pages/Activities';
import ScanQr from './pages/Scanner'
import Exercises from './pages/Exercises'
import NotFoundPage from './pages/404';

function App()  {
  return (
    
    <Router>
     <Switch>
      <Route exact path="/login" component = {MainPage}></Route>
      <Route exact path="/login/aktivities" component = {Activities}></Route>
      <Route exact path="/login/aktivities/scan" component = {ScanQr}></Route>
      <Route exact path="/login/aktivities/scan/exercise" component = {Exercises}></Route>
      <Route component={NotFoundPage}/>
     </Switch>
    </Router>
  );
}

export default App;
