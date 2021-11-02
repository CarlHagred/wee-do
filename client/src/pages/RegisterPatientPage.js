import React from "react";
import { Link } from "react-router-dom";
import RegisterPatient from "../components/ActivityMenu/RegisterPatient";


const RegisterPatientPage = () => {
    return (
      <div>
        <br />
        <ul>
          <Link to="/">Tillbaka till förstasidan</Link>
        </ul>
        <RegisterPatient />
      </div>
    );
  };
  export default RegisterPatientPage;