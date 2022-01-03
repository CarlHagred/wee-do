import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useHistory, useParams } from "react-router-dom";
import { Confirm } from "react-st-modal";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

import {
  deletePatientIndex,
  getOnePatient,
  setPatientInactiveIndex,
  setPatientActiveIndex,
  deleteSelectedVideo,
} from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import Button from "../../components/common/Button";
import TopWrapper from "../../components/common/TopWrapper";
import StatisticsChart from "../../components/admin/StatisticsChart";

const StyledPatientID = styled.div`
  background-color: #ccc;
  width: 100%;
  padding: 25px;
  border-radius: 3px;
  text-align: center;
  justify-content: middle;
  font-size: 1.3em;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  gap: 1em;
`;

const StyledSectionHr = styled.hr`
  color: black;
  margin: 0 1em;
  @media (min-width: 415px) {
    margin: 0 5em;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
  margin: 2em 5em;
  font-weight: lighter;
`;

const ChoosenExerciseContainer = styled.div`
  flex: 1;
`;

const ContentHeader = styled.h2`
  text-align: left;
  font-size: 1.3em;
  padding-bottom: 0.3em;
  @media (min-width: 415px) {
    min-width: 350px;
    font-size: 1.5em;
  }
`;

const StyledHr = styled.hr`
  color: lightgrey;
`;

const StyledExercise = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 1em 0;
  min-width: 180px;
`;

const ParagraphContainer = styled.div``;

const StyledParagraph = styled.p`
  font-size: 1em;
  padding: 2px;
`;

const StyledTrashButton = styled.div`
  margin: 0 auto;
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
`;

const DailyStatisticsContainer = styled.div`
  flex: 1;
`;

const StyledStatistics = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5em;
  min-width: 320px;
  background-color: rgb(247, 247, 248, 100%);
  border: solid;
  border-color: rgba(218, 223, 225, 0.3);
  border-radius: 4px;
  margin-bottom: 1em;
  @media (min-width: 415px) {
    min-width: 350px;
  }
`;

const StyledLinkVideoTitle = styled(Link)`
  color: #0000ff;
  :hover {
    text-decoration: underline;
    color: #1e90ff;
  }
  :active {
    color: #800080;
  }
`;

const StyledChart = styled.div`
  background-color: rgb(247, 247, 248, 100%);
  border: solid;
  border-color: rgba(218, 223, 225, 0.3);
  border-radius: 4px;
  margin: 2em 5em;
`;

const PatientStatistics = () => {
  let history = useHistory();
  const { name } = useParams();
  const [patient, setPatient] = useState([]);
  const [patientStatistics, setPatientStatistics] = useState([]);
  const [patientStatus, setPatientStatus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPatient = await getOnePatient(name);
      console.log(fetchedPatient);
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
      history.push("/admin/search/patient");
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
      window.location.reload(true); 
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
      history.push("/admin/search/patient");
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
      history.push("/admin/search/patient");
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
    history.push(`/admin/select/${patient.name}`);
  };

  const [dateState, setDateState] = useState(new Date());
  let [arrayDate, setArrayDate] = useState([]);
  let [arrayDateTime, setArrayDateTime] = useState([]);

  useEffect(() => {
    let arrayDate2 = [];
    let arrayDate3 = [];

    const date = moment(dateState).format("MMMM Do YYYY");

    for (var i = 0; i < patientStatistics.length; i++) {
      for (var j = 0; j < patientStatistics[i].watchedTime.length; j++) {
        if (
          moment(patientStatistics[i].watchedTime[j]).format("MMMM Do YYYY") ===
          date
        ) {
          arrayDate2.push(patientStatistics[i]);
          break;
        } else {
        }
      }
    }
    setArrayDate(arrayDate2);

    let counter = 0;
    for (var k = 0; k < arrayDate2.length; k++) {
      for (var l = 0; l < arrayDate2[k].watchedTime.length; l++) {
        if (
          moment(arrayDate2[k].watchedTime[l]).format("MMMM Do YYYY") === date
        ) {
          counter++;
        }
      }
      if (counter !== 0) {
        arrayDate3.push(counter);
      }
      counter = 0;
    }
    setArrayDateTime(arrayDate3);
  }, [dateState]);

  const changeDate = (e) => {
    setDateState(e);
  };

  return (
    <AdminLayout>
      <TopWrapper header="Statistik">
        <StyledPatientID>
          <strong>Patient-id: </strong>
          {patient.name}
        </StyledPatientID>
        <ButtonContainer>
          <Button onClick={handleSelectExcersice} width="fixed">
            Välj övningar
          </Button>
          {patientStatus ? (
            <Button
              onClick={customPatientInactive}
              icon="patientInactive"
              width="fixed"
            >
              Gör patient inaktiv
            </Button>
          ) : (
            <Button
              onClick={customPatientActive}
              icon="patientActive"
              width="fixed"
            >
              Gör patient aktiv
            </Button>
          )}
          <Button
            onClick={customDeletePatient}
            icon="trash"
            width="fixed"
            outlinedTheme
          >
            Radera patient
          </Button>
        </ButtonContainer>
      </TopWrapper>
      <StyledSectionHr />
      <ContentWrapper>
        <ChoosenExerciseContainer>
          <>
            <ContentHeader>Valda Övningar </ContentHeader>
            <StyledHr />
            {patientStatistics.map(stats => (
              <div key={stats.vidId}>
                {(() => {
                    return (
                      <>
                        {/*{stats.vidTitle}*/}
                        { (stats != null) ?
                          <StyledExercise >
                            <ParagraphContainer>
                              <StyledParagraph> {`Övningstitel: ${stats.vidTitle}`} </StyledParagraph>
                              <StyledParagraph> {`Antal gåner per dag: ${stats.amountOfTimes}`} </StyledParagraph>
                              <StyledParagraph> {`Antal sets per gång: ${stats.set}`} </StyledParagraph>
                              <StyledParagraph> {`Antal reps per set: ${stats.rep}`} </StyledParagraph>
                            </ParagraphContainer>
                            <StyledTrashButton>
                              <Button
                                onClick={() =>
                                  customDeleteSelectedExercise(
                                    patient.name,
                                    stats.vidId
                                  )
                                }
                                icon="trash"
                                outlinedTheme
                              />
                            </StyledTrashButton>
                        </StyledExercise> : null}
                      </>
                    );
                })()}
              </div>
            ))}
          </>
        </ChoosenExerciseContainer>

        <CalendarContainer>
          <ContentHeader>Kalender</ContentHeader>
          <Calendar value={dateState} onChange={changeDate} />
        </CalendarContainer>

        <DailyStatisticsContainer>
          <ContentHeader>
            Statistik för {moment(dateState).format("LL")}
          </ContentHeader>
          {arrayDate.map((stat, index) => (
            <div key={stat.vidId}>
              <StyledStatistics>
                <ParagraphContainer>
                  <StyledParagraph>Övning: </StyledParagraph>
                  <StyledLinkVideoTitle to={`../exercise/${stat.vidId}`}>
                    {/*stat.vidTitle*/}
                  </StyledLinkVideoTitle>
                  <StyledParagraph>
                    Antal gånger idag: {arrayDateTime[index]}
                  </StyledParagraph>
                  <StyledParagraph>
                    Antal förväntade idag: 3{/*{stat.amountOfTimes}*/}
                  </StyledParagraph>
                </ParagraphContainer>

                {}
              </StyledStatistics>
            </div>
          ))}
        </DailyStatisticsContainer>
      </ContentWrapper>

      <StyledSectionHr />
      {/* <StyledChart>
        <StatisticsChart patientStatistics={patientStatistics} />
      </StyledChart>*/}
    </AdminLayout>
  );
};

export default PatientStatistics;
