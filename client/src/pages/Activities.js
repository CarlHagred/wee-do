import React from "react";
import { Link } from "react-router-dom";
import RegisterPatient from "../components/ActivityMenu/RegisterPatient";
import SearchPatient from "../components/ActivityMenu/SearchPatient";

const Activities = () => {
  return (
    <div>
      <h2>Login succeeded</h2>
      <h3>Aktivitetspanel</h3>
      <RegisterPatient />
      <hr />
      <SearchPatient />
      <hr />
      <ul>
        <Link to="/">Tillbaka till förstasidan</Link>
      </ul>
    </div>
  );
};
export default Activities;
