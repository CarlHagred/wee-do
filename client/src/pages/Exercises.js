import React from "react";
import { Link } from "react-router-dom";

const Exercises = () => {
  return (
    <div>
      <h2>Lista med övningar</h2>
      <br />
      <ul>
        <Link to="/">Tillbaka till förstasidan</Link>
      </ul>
    </div>
  );
};
export default Exercises;
