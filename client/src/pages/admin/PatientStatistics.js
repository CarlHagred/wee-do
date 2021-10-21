import React from "react";
import { Link, useParams } from "react-router-dom";

const PatientStatistics = () => {
  const { name } = useParams();

  return (
    <>
      <h2>Statistik</h2>

      <p>Test för stats: namn {name}</p>
      <ul>
        <Link to="/">Tillbaka till förstasidan</Link>
      </ul>
    </>
  );
};
export default PatientStatistics;
