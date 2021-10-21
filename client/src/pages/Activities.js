import React from "react";
import { Link } from "react-router-dom";
import RegisterPatient from "../components/ActivityMenu/RegisterPatient";
import SearchPatient from "../components/ActivityMenu/SearchPatient";

const Activities = () => {
  return (
    <>
      <RegisterPatient />
      <SearchPatient />
    </>
  );
};
export default Activities;
