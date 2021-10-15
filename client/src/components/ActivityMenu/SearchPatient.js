import React, { useState, useEffect } from "react";
import { getAllPatients } from "../../api";

const SearchPatient = () => {
  const [patients, setPatients] = useState([]);
  const [searchedName, setSearchedName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const allPatients = await getAllPatients();
      setPatients(allPatients.data);
    };
    fetchData();
  }, [patients]);
  return (
    <div>
      <input
        type="text"
        placeholder="Sök efter en patient... "
        onChange={(e) => setSearchedName(e.target.value)}
      ></input>

      {patients
        .filter((patient) => {
          if (patient.name.includes(searchedName)) {
            return patient;
          }
        })
        .map((patient) => (
          <p key={patient._id}>{patient.name}</p>
        ))}
    </div>
  );
};

export default SearchPatient;
