import React from "react";
import { Link } from "react-router-dom";
import ScanCamera from "../../components/patient/ScanCamera";

const QrScanner = () => {
  return (
    <>
      <h2>Camera-page</h2>
      <br />
      <ul>
        <Link to="/">Tillbaka</Link>
      </ul>
      <h1>Scanna</h1>
      <ScanCamera />
    </>
  );
};

export default QrScanner;
