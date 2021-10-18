import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllPatients } from "../../api";
import SearchBar from "../styled/SearchBar";

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
    <>
      <SearchBar
        placeholder="Sök efter en patient... "
        onChange={(e) => {
          setSearchedName(e.target.value);
        }}
      />

      {patients
        .filter((patient) => {
          if (patient.name.includes(searchedName)) {
            return patient;
          }
        })
        .map((patient) => (
          <p key={patient._id}>
            <Link to={`/statistik/${patient.name}`} target="_blank">
              {patient.name}
            </Link>
          </p>
        ))}
    </>
  );
};

export default SearchPatient;
