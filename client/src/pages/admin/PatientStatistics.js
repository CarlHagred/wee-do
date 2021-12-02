import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { Confirm } from "react-st-modal";

import { deletePatientIndex, getOnePatient, setPatientInactiveIndex, setPatientActiveIndex } from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import ContentContainer from "../../components/common/ContentContainer";
import Button from "../../components/common/Button";

const StyledContainer = styled.div`
  h2{
    text-align: center;
    font-size: 2.5em;
  }
  p{
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
  const [patientStatus, setPatientStatus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPatient = await getOnePatient(name);
      setPatient(fetchedPatient.data);
      setPatientStatistics(fetchedPatient.data.statistics);
      setPatientStatus(fetchedPatient.data.active);
    };
    fetchData();
  }, [name]);

const customDeletePatient = async () => {
  const conf = await Confirm(
    "Är du säker på att du vill radera " + name + "?",
    "Radera",
    "OK",
    "Avbryt"
  );
  if (conf) {
    deletePatient();
    window.location = "/admin/search/patient";
  }
};

const customPatientInactive = async () => {
  const conf = await Confirm(
    "Är du säker på att du vill göra " + name + " inaktiv?",
    "Inaktiv",
    "OK",
    "Avbryt"
  );
  if (conf) {
    setPatientInactive();
    window.location = "/admin/search/patient";
  }
};

const customPatientActive = async () => {
  const conf = await Confirm(
    "Är du säker på att du vill göra " + name + " aktiv?",
    "Aktiv",
    "OK",
    "Avbryt"
  );
  if (conf) {
    setPatientActive();
    window.location = "/admin/search/patient";
  }
};

const deletePatient = () => {
  deletePatientIndex(name);
  console.log(name);
};

const setPatientInactive = () => {
setPatientInactiveIndex(name);
};

const setPatientActive = () => {
  setPatientActiveIndex(name);
  };


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
                  <br/>
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
                    <br/>
                </StyledStatistics>
              </React.Fragment>
            ))}
            <br/>
            <Button onClick={customDeletePatient} icon="trash">Radera patient</Button>
            <br/>
            <br/>
            { patientStatus? <Button onClick={customPatientInactive} icon="patientInactive">Gör patient inaktiv</Button> : null}
            { !patientStatus? <Button onClick={customPatientActive} icon="patientActive">Gör patient aktiv</Button> : null} 
      </StyledContainer>
    </ContentContainer>
  </AdminLayout>
);};

export default PatientStatistics;
