import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div>
      <h2>Hjälp</h2>
      <br />

      <ul>
        <Link to="/">Tillbaka till förstasidan</Link>
      </ul>
    </div>
  );
};
export default Help;
