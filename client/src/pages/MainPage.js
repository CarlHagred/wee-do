import React from "react";
import { Link } from "react-router-dom";
import LoginPatient from "../components/Login/LoginPatient";

const MainPage = () => {
  return (
    <div>
      <h2>WeeDo förstassida</h2>
      
      <hr/>
        < LoginPatient />
      <hr/>

      <ul>
        <Link to="/activities">Activities</Link>
      </ul>
      <ul>
        <Link to="/exercises">Exercises</Link>
      </ul>
      <ul>
        <Link to="/scanner">Scanner</Link>
      </ul>
    </div>
  );
};
export default MainPage;
