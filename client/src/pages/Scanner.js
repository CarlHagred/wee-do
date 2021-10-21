import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSession } from "../api";



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
      <ul>
        <Link to="/">Tillbaka till förstasidan</Link>
      </ul>
    </div>
  );
};
export default ScanQr;
