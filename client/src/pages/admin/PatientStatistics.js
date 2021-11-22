import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

import { getOnePatient } from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import ContentContainer from "../../components/common/ContentContainer";

const StyledContainer = styled.div`
  h2 {
    text-align: center;
    font-size: 2.5em;
  }

  p {
    font-size: 1.2em;
  }
`;
const StyledPatient = styled.p`
  background-color: #ccc;
  padding: 4px;
  border-radius: 3px;
`;
const StyledLink = styled(Link)`
  color: #0000ff;
  :hover {
    text-decoration: underline;
    color: #1e90ff;
  }
  :active {
    color: #800080;
  }
`;

const StyledStatistics = styled.div`
  background-color: rgb(247, 247, 248, 100%);
  border: solid;
  border-color: rgba(218, 223, 225, 0.3);
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 5px;
  :hover {
    background: rgb(108, 153, 255, 33%);
  }
`;

const PatientStatistics = () => {
  const { name } = useParams();
  const [patient, setPatient] = useState([]);
  const [patientStatistics, setPatientStatistics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPatient = await getOnePatient(name);
      setPatient(fetchedPatient.data);
      setPatientStatistics(fetchedPatient.data.statistics);
      console.log(fetchedPatient.data.statistics);
    };
    fetchData();
  }, [name]);

  return (
    <AdminLayout>
      <ContentContainer>
        <StyledContainer>
          <h2>Statistik</h2>
          <StyledPatient>
            <strong>Användarnamn: </strong>
            {patient.name}
          </StyledPatient>
          {patientStatistics.map((stat, index) => (
            <React.Fragment key={stat.vidId}>
              <StyledStatistics>
                <br />
                <p>
                  <strong>Video: </strong>{" "}
                  <StyledLink to={`../exercise/${stat.vidId}`}>
                    {stat.vidId}
                  </StyledLink>{" "}
                </p>
                <p>
                  <strong>Scans: </strong>
                  {stat.scans}
                </p>
                <p>
                  <strong>Antal visningar: </strong>
                  {stat.timesWatched}
                </p>
                <p>
                  <strong>Tid för visning:</strong>
                  {patientStatistics[index].watchedTime.map((time) => (
                    <p>{time.replace("T", ", ").slice(0, -5)}</p>
                  ))}
                </p>
                <p>
                  <strong>Tid för scan:</strong>
                  {patientStatistics[index].scanTime.map((time) => (
                    <p>{time.replace("T", ", ")}</p>
                  ))}
                </p>
                <br />
              </StyledStatistics>
            </React.Fragment>
          ))}
        </StyledContainer>
      </ContentContainer>
    </AdminLayout>
  );
};
export default PatientStatistics;
