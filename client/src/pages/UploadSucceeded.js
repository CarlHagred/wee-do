import React from "react";
import { Link } from "react-router-dom";
import UpdateDb from "../components/activityMenu/UpdateDb";
import '../components/styled/SaveVideo.css';

const UploadSucceeded = () => {
    return (
    <div>
      <br />
      <br />
      <h1>Övningen har laddats upp</h1>
      <br />
      <ul>
        <br />
        <Link to="/">Tillbaka till förstasidan</Link>
        <UpdateDb/>
      </ul>
    </div>
    );
}
 
export default UploadSucceeded ;