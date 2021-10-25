import React from "react";
import { Link, useParams } from "react-router-dom";

const Statistics = () => {
  const { name } = useParams();

  return (
    <div>
      <p>Test för stats: namn {name}</p>
      <ul>
        <Link to="/">Tillbaka till förstasidan</Link>
      </ul>
    </div>
  );
};
export default Statistics;
