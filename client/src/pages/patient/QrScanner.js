import React from "react";
import { Link } from "react-router-dom";
import PatientLayout from "../../components/patient/PatientLayout";
import ScanCamera from "../../components/patient/ScanCamera";

const QrScanner = () => {
  return (
    <PatientLayout>
      <h2>Camera-page</h2>
      <br />
      <ul>
        <Link to="/">Tillbaka</Link>
      </ul>
      <h1>Scanna</h1>
      <ScanCamera />
    </PatientLayout>
  );
};

export default QrScanner;
