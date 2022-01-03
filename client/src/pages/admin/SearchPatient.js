import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getAllActivePatients, getAllInactivePatients } from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import SearchBar from "../../components/common/SearchBar";
import TopWrapper from "../../components/common/TopWrapper";

const ListPanel = styled.nav`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0.8em 2em 0.8em;
  @media (min-width: 415px) {
    margin: 0 5em 3em 5em;
  }
`;

const StyledTable = styled.table`
  caption-side: top;
  border-collapse: separate;
  border-spacing: 5px;
  width: 50%;
  justify-content: left;
  border-radius: 4px;

  td,
  th {
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 1em;
    text-align: left;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: rgb(247, 247, 248, 100%);
    }
    :nth-of-type(even) {
      background-color: rgb(247, 247, 248, 100%);
    }
    :hover {
      cursor: pointer;
      filter: brightness(130%);
      background-color: ${(props) => props.theme.palette.hover};
    }
  }

  thead td {
    background-color: #c2c2c2;
    border-radius: 4px;
    font-size: 1.2em;
  }
`;

const SearchPatient = () => {
  const [searchedName, setSearchedName] = useState("");
  const [patientsActive, setPatientsActive] = useState([]);
  const [patientsInactive, setPatientsInactive] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allActivePatients = await getAllActivePatients();
      const allInactivePatients = await getAllInactivePatients();
      setPatientsActive(allActivePatients.data);
      setPatientsInactive(allInactivePatients.data);
    };
    fetchData();
  }, []);

  return (
    <AdminLayout>
      <TopWrapper header="Sök Patient">
        <SearchBar
          placeholder="Sök efter en patient... "
          onChange={(e) => {
            setSearchedName(e.target.value);
          }}
        />
      </TopWrapper>
      <ListPanel>
        <StyledTable>
          <colgroup>
            <col />
          </colgroup>
          <thead>
            <tr>
              <td>Aktiva patient-id:</td>
            </tr>
          </thead>
          {patientsActive
            .filter((patient) => {
              return patient.name.includes(searchedName) ? patient : null;
            })
            .map((patient) => (
              <tbody key={patient._id}>
                <tr
                  onClick={() => {
                    goToStatisticsPage(patient);
                  }}
                >
                  <td>{patient.name}</td>
                </tr>
              </tbody>
            ))}
        </StyledTable>
        <StyledTable>
          <colgroup>
            <col />
          </colgroup>
          <thead>
            <tr>
              <td>Inaktiva patient-id:</td>
            </tr>
          </thead>
          {patientsInactive
            .filter((patient) => {
              return patient.name.includes(searchedName) ? patient : null;
            })
            .map((patient) => (
              <tbody key={patient._id}>
                <tr
                  onClick={() => {
                    goToStatisticsPage(patient);
                  }}
                >
                  <td>{patient.name}</td>
                </tr>
              </tbody>
            ))}
        </StyledTable>
      </ListPanel>
    </AdminLayout>
  );
};

const goToStatisticsPage = async (patient) => {
  var thisPatient = patient.name;
  window.location = "/admin/statistics/" + thisPatient;
};

export default SearchPatient;
