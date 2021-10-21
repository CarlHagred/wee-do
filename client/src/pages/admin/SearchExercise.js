import React from "react";
import { Link } from "react-router-dom";

const SearchExercise = () => {
  return (
    <>
      <h2>Sök övning</h2>
      <br />
      <ul>
        <Link to="/">Tillbaka till förstasidan</Link>
      </ul>
    </>
  );
};
export default SearchExercise;
