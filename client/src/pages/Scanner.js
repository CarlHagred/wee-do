import React from "react";
import { Link } from "react-router-dom";
import ScanCamera from "../components/Scanner/ScanCamera";

const ScanQr = () => {
  return (
    <>
      <h2>Camera-page</h2>
      <br />
      <h1>Scanna</h1>
      <ScanCamera />
    </>
  );
};

export default ScanQr;
