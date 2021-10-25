import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSession, logoutPatient } from "../api";
import ScanCamera from '../components/Scanner/ScanCamera';

const ScanQr = () => {

  const [user, setUser] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const user = await getSession();
      setUser(user.data);
    };
    fetchData();
  }, [user]);
  
  return (
    <div>
      <h2>Camera-page</h2>
      <p>Välkommen {user.name}!</p>
      <button onClick={logoutPatient}>Logga ut</button>
      <br />
      <ul>
        <Link to="/">Tillbaka</Link>
      </ul>
      <h1>Scanna</h1>
      <ScanCamera />
    </div>
  );
};

export default ScanQr;
