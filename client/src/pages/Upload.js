import UpploadVideo from "../components/activityMenu/UpploadVideo";
import React from "react";
import { Link } from "react-router-dom";

const Upload = () => {
    return (
        <div>
        <br />
        <ul>
          <Link to="/">Tillbaka till förstasidan</Link>
        </ul>
        <UpploadVideo />
      </div>
    );
}
 
export default Upload;