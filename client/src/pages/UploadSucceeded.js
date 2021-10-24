import React from "react";
import { Link } from "react-router-dom";

const UploadSucceeded = () => {
    return (
        <div>
      <h2>Uppladning av övning lyckades</h2>
      <br />
      <ul>
        <Link to="/">Tillbaka till förstasidan</Link>
      </ul>
    </div>
    );
}
 
export default UploadSucceeded ;