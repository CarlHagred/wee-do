import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About WeeDo</h2>
      <br />
      <ul>
        <Link to="/">Tillbaka till förstasidan</Link>
      </ul>
    </div>
  );
};
export default About;
