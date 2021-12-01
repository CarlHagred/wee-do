import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getAllActivePatients, getAllInactivePatients} from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import SearchBar from "../../components/common/SearchBar";
import ContentContainer from "../../components/common/ContentContainer";


const ListPanelWrapper = styled.div`
 justify-content: top;
`;

const ListPanel = styled.nav`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2em;
  align-items: top;
  margin-top: 5%;
  margin-bottom: 5%;
  justify-content: center;
`;

const StyledTable = styled.table`
  caption-side: top;
  border-collapse: separate;
  border-spacing: 5px;
  width: 46%;
  margin: 1em 0;
  justify-content: left;
  border-radius: 4px;
  
  td,

  th {
      padding: 5px 10px;
      border-radius: 4px;
      font-family: "Roboto", sans-serif;
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
        filter: brightness(130%);
        background-color: ${(props) => props.theme.palette.hover};
      }
    }

    thead td { /* denna är där det står aktiva och inaktiva pat */
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
    <ContentContainer>
      <ListPanelWrapper>
        <ListPanel>
          <SearchBar
            placeholder="Sök efter en patient... "
            onChange={(e) => {
            setSearchedName(e.target.value);
            }}/>          
            <StyledTable>
              <colgroup>
                <col/>
              </colgroup>
              <thead>
                <tr >
                  <td>Aktiva patient-id:</td>
                </tr>
              </thead>
              {patientsActive
                .filter((patient) => {
                  return patient.name.includes(searchedName)
                  ? patient
                  : null;
                })
                .map((patient) => (
                <tbody>
                  <tr key={patient._id}>
                     <td>
                      <Link
                        to={`/admin/statistics/${patient.name}`}
                        key={patient._id}>
                        {patient.name}
                      </Link>    
                      </td>
                  </tr>
                </tbody>
                ))}
            </StyledTable>           
            <StyledTable>
              <colgroup>
                <col/>
              </colgroup>
              <thead>
                <tr >
                  <td>Inaktiva patient-id:</td>
                </tr>
              </thead>
              {patientsInactive
                .filter((patient) => {
                  return patient.name.includes(searchedName)
                  ? patient
                  : null;
                })
                .map((patient) => (
                <tbody>
                  <tr key={patient._id}>
                     <td>
                      <Link
                        to={`/admin/statistics/${patient.name}`}
                        key={patient._id}>
                        {patient.name}
                      </Link>    
                      </td>
                  </tr>
                </tbody>
                ))}
            </StyledTable>
          </ListPanel>
        </ListPanelWrapper>
      </ContentContainer>
    </AdminLayout>
);
};

export default SearchPatient;
