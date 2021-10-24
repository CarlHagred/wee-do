import React from "react";
import { Link } from "react-router-dom";
import RegisterPatient from "../components/activityMenu/RegisterPatient";
import SearchPatient from "../components/activityMenu/SearchPatient";

const Activities = () => {
  return (
    <>
      <ul>
        <Link to="/">Tillbaka till förstasidan</Link>
      </ul>
      <br />
      <br />
      <RegisterPatient />
      <SearchPatient />
    </>
  );
};
export default Activities;
