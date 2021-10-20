import React from "react";
import { Link } from "react-router-dom";
import SearchPatient from "../components/ActivityMenu/SearchPatient";


const SearchPatientPage = () => {
    return (
      <div>
        <br />
        <ul>
          <Link to="/">Tillbaka till förstasidan</Link>
        </ul>
        <SearchPatient />
      </div>
    );
  };
  export default SearchPatientPage;
