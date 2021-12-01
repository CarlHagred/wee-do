import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

import { getOnePatient } from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import ContentContainer from "../../components/common/ContentContainer";
import StatisticsChart from "../../components/admin/StatisticsChart";

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
`;
const StyledChart = styled.div`
  background-color: rgb(247, 247, 248, 100%);
  border: solid;
  border-color: rgba(218, 223, 225, 0.3);
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 5px;
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
          {patientStatistics.map((stat) => (
            <React.Fragment key={stat.vidId}>
              <StyledStatistics>
                <br />

                <strong>Video: </strong>
                <StyledLink to={`../exercise/${stat.vidId}`}>
                  {stat.vidId}
                </StyledLink>
                <br />
                <strong>Scans: </strong>
                {stat.scans}
                <br />
                <strong>Antal visningar: </strong>
                {stat.timesWatched}
                <br />
                <strong>Tid för visning:</strong>
                {stat.watchedTime.map((time, index) => (
                  <p style={{ marginTop: 5 }} key={index}>
                    {time.replace("T", ", ").slice(0, -8)}
                  </p>
                ))}
                <br />
              </StyledStatistics>
            </React.Fragment>
          ))}
          <StyledChart>
            <StatisticsChart patientStatistics={patientStatistics} />
          </StyledChart>
        </StyledContainer>
      </ContentContainer>
    </AdminLayout>
  );
};
export default PatientStatistics;
