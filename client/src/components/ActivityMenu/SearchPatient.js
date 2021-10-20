import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllPatients } from "../../api";
import SearchBar from "../styled/SearchBar";
import styled from "styled-components";

const StyledTable = styled.table`
  caption-side: top;
  border-collapse: separate;
  border-spacing:  5px;
  width: 100%;
  margin: 1em 0;
  justify-content: left;
  border-radius: 4px; 
  
  td,th {
    padding: 5px 10px;
    border-radius: 4px;
    font-family: "Roboto", sans-serif;
    font-size: 1em;
    text-align: left; 
  } 

  tbody tr {
    :nth-of-type(odd) {
      background-color: rgb(216, 228, 255, 33%);

    }
    :nth-of-type(even) {
        background-color: rgb(216, 228, 255, 33%);
      }
    :hover {
      background: rgb(108, 153, 255, 33%);
    }

  }
  thead td{
    background-color: #c2c2c2;
    border-radius: 4px;
    font-size: 1.2em;

  }
`;


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
    <StyledTable>
    <colgroup>
      <col />
    </colgroup>
    <thead>
      <tr>
        <td>
        Patient-id:
        </td>
      </tr>
    </thead>
      {patients
        .filter((patient) => {
          return patient.name.includes(searchedName) ? patient : null;
        })
        .map((patient) => (
          <tbody>
          <tr>
            <td>
            <Link to={`/statistik/${patient.name}`} target="_blank" key={patient._id}>
              {patient.name}
            </Link>
            </td>
          </tr>
          </tbody>
        ))}
    </StyledTable>
    </>
  );
};

export default SearchPatient;
