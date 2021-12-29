import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { Confirm } from "react-st-modal";

import {
  deletePatientIndex,
  getOnePatient,
  setPatientInactiveIndex,
  setPatientActiveIndex,
  deleteSelectedVideo,
} from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import ContentContainer from "../../components/common/ContentContainer";
import Button from "../../components/common/Button";
import StatisticsChart from "../../components/admin/StatisticsChart";
import { BsReverseBackspaceReverse } from "react-icons/bs";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 2em 0;
`;

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
      "Radera patient",
      "Radera",
      "Avbryt"
    );
    if (conf) {
      deletePatient();
      window.location = "/admin/search/patient";
    }
  };

  const customDeleteSelectedExercise = async (patientName, videoId) => {
    const conf = await Confirm(
      "Är du säker på att du vill ta bort den valda övningen?",
      "Ja",
      "Ja",
      "Avbryt"
    );
    if (conf) {
      deleteSelectedVideo(patientName, videoId);
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
  };

  const setPatientInactive = () => {
    setPatientInactiveIndex(name);
  };
  const setPatientActive = () => {
    setPatientActiveIndex(name);
  };

  const handleSelectExcersice = () => {
    window.location = `/admin/select/${patient.name}`;
  };

  return (
    <AdminLayout>
      <ContentContainer>
        <StyledContainer>
          <>
            <h2>Statistik</h2>
            <StyledPatient>
              <strong>Användarnamn: </strong>
              {patient.name}
            </StyledPatient>
          </>
          <>
            <h1>Valda Övningar </h1>
            {patientStatistics.map((stats) => (
              <>
                {(() => {
                  if (stats.amountOfTimes != undefined) {
                    return (
                      <>
                        <p>
                          {stats.vidId}: {stats.amountOfTimes}
                        </p>
                        <Button
                          onClick={() =>
                            customDeleteSelectedExercise(
                              patient.name,
                              stats.vidId
                            )
                          }
                          icon="trash"
                        />
                      </>
                    );
                  }
                })()}
              </>
            ))}
          </>
          <ButtonContainer>
            <Button onClick={customDeletePatient} icon="trash">
              Radera patient
            </Button>
            {patientStatus ? (
              <Button onClick={customPatientInactive} icon="patientInactive">
                Gör patient inaktiv
              </Button>
            ) : (
              <Button onClick={customPatientActive} icon="patientActive">
                Gör patient aktiv
              </Button>
            )}
            <Button onClick={handleSelectExcersice}>Välj övningar</Button>
          </ButtonContainer>
          <>
            {patientStatistics.map((stat) => (
              <React.Fragment key={stat.vidId}>
                <StyledStatistics>
                  <br />
                  <strong>Video: </strong>
                  <StyledLink to={`../exercise/${stat.vidId}`}>
                    {stat.vidTitle}
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
                </StyledStatistics>
              </React.Fragment>
            ))}
          </>
        </StyledContainer>
        <StyledChart>
          <StatisticsChart patientStatistics={patientStatistics} />
        </StyledChart>
      </ContentContainer>
    </AdminLayout>
  );
};

export default PatientStatistics;
