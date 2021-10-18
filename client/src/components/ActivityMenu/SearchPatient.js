import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllPatients } from "../../api";
import UserTable from "../styled/UserTable";

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
          <p>
            <Link
              to={`/statistik/${patient.name}`}
              target="_blank"
              key={patient._id}
            >
              {patient.name}
            </Link>
            <hr></hr>
          </p>
        ))}
    </div>
  );
};

export default SearchPatient;


