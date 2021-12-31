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

const ExerciseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 1em 0;
  min-width: 180px;
`;

const ParagraphWrapper = styled.div``;

const StyledButtonsTrash = styled.div`
  margin: 0 auto;
`;

const ContentParagraph = styled.p`
  font-size: 1em;
  padding: 2px;
`;

const ContentHeader = styled.h2`
  text-align: left;
  font-size: 1.5em;
  padding-bottom: 0.3em;
`;

const StyledTopHr = styled.hr`
  color: black;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
  margin: 0 5em;
  font-weight: lighter;
`;

const ChoosenExerciseContainer = styled.div`
  flex: 1;
`;

const CalendarContainer = styled.div`
  flex: 1;
`;

const DailyStatisticsContainer = styled.div`
  flex: 1;
`;

const StyledButtonsTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 2em 0;
`;

const NEW_StyledPatientID = styled.div`
  background-color: #ccc;
  width: 100%;
  padding: 25px;
  border-radius: 3px;
  text-align: center;
  justify-content: middle;
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

const StyledCalAndStatLeft = styled.div`
  .sides {
    margin: 0;
  }
  .left {
    float: left;
    width: 75%;
    overflow: hidden;
  }
`;

const StyledCalAndStatRight = styled.div`
  .sides {
    margin: 0;
  }
  .right {
    float: left;
    width: 25%;
    overflow: hidden;
  }
`;

const StyledStatisticsBox = styled.div`
  //background-color: rgb(247, 247, 248, 100%);
  border: solid;
  border-color: rgba(218, 223, 225, 0.3);
  border-radius: 4px;
  padding: 10px;
  margin: 5px 0;
  min-width: 350px;
  p {
    font-size: 1em;
    padding: 2px;
  }
`;

const StyledChart = styled.div`
  // SPARA
  background-color: rgb(247, 247, 248, 100%);
  border: solid;
  border-color: rgba(218, 223, 225, 0.3);
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const StyledHr = styled.hr`
  color: lightgrey;
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
        <NEW_StyledPatientID>
          <strong>Patient-id: </strong>
          {patient.name}
        </NEW_StyledPatientID>
        <StyledButtonsTop>
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
        </StyledButtonsTop>
        <StyledTopHr />
      </TopWrapper>
      <ContentWrapper>
        <ChoosenExerciseContainer>
          <>
            <ContentHeader>Valda Övningar </ContentHeader>
            {patientStatistics.map((stats) => (
              <>
                {(() => {
                  if (stats.amountOfTimes != undefined) {
                    return (
                      <>
                        <StyledHr />
                        {/*{stats.vidTitle}*/}
                        <ExerciseWrapper>
                          <ParagraphWrapper>
                            <ContentParagraph>
                              Antal gånger per dag: {stats.amountOfTimes}
                            </ContentParagraph>
                            <ContentParagraph>
                              Antal sets per gång: 3
                            </ContentParagraph>
                            <ContentParagraph>
                              Antal reps per set: 15
                            </ContentParagraph>
                          </ParagraphWrapper>
                          <StyledButtonsTrash>
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
                          </StyledButtonsTrash>
                        </ExerciseWrapper>
                      </>
                    );
                  }
                })()}
              </>
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
              <StyledStatisticsBox>
                <p>Övning: </p>
                <StyledLinkVideoTitle to={`../exercise/${stat.vidId}`}>
                  {/*stat.vidTitle*/}
                </StyledLinkVideoTitle>
                <p>Antal gånger idag: {arrayDateTime[index]}</p>
                <p>Antal förväntade idag: 3{/*<p>{stat.amountOfTimes}</p>*/}</p>
                {}
              </StyledStatisticsBox>
            </div>
          ))}
        </DailyStatisticsContainer>
      </ContentWrapper>

      <hr />
      {/*<StyledChart>
          <StatisticsChart patientStatistics={patientStatistics} />
        </StyledChart>*/}
    </AdminLayout>
  );
};

export default PatientStatistics;
