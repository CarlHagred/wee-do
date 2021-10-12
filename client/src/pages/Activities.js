import React from "react";
import { Link } from "react-router-dom";
import RegisterPatient from "../components/ActivityMenu/RegisterPatient";

const Activities = () => {
  return (
    <div>
      <h2>Login succeeded</h2>
      <h3>Aktivitetspanel</h3>
      <RegisterPatient />
      <ul>
        <Link to="/">Tillbaka till förstasidan</Link>
      </ul>
    </div>
  );
};
export default Activities;
