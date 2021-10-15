import React from "react";
import { Link } from "react-router-dom";

const Activities = () => {
  return (
    <div>
      <h2>Login succeeded</h2>
      <br />
      <h3>Aktivitetspanel</h3>
      <br />
      <ul>
        <Link to="/">Tillbaka till förstasidan</Link>
      </ul>
    </div>
  );
};
export default Activities;
