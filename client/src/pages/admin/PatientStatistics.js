import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { Confirm } from "react-st-modal";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

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


const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 2em 0;
`;

const StyledButton = styled.div`
  display: flex;
  width: 5px;`;


const StyledContainer = styled.div`
  h2 {
    text-align: center;
    font-size: 2.5em;
  }
  p {
    font-size: 1.2em;
  }
`;

const StyledValdaOvningar = styled.div`
  h2 {
    text-align: left;
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.2em;
    padding: 2px;
  }
  p {
    font-size: 1em;
    padding: 2px;
  }
`;

const StyledClendar = styled.div`
  h2 {
    text-align: left;
    font-size: 1.5em;
    padding: 2px;
  }
  h3 {
    font-size: 1.2em;
    padding: 2px;
  }
  p {
    font-size: 1em;
    padding: 2px;
  }
`;

const StyledPatient = styled.p`
  background-color: #ccc;
  padding: 25px;
  border-radius: 3px;
  text-align: center;
  justify-content: middle;
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

const ListPanelWrapper = styled.div`
  justify-content: top;
  flex-wrap: wrap;
`;

const ListPanel = styled.nav`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1em;
  align-items: center;
  margin-bottom: 1%;
  justify-content: left;
`;

const StyledHr = styled.hr`
  color: lightgrey;
  width: 400px;
`;

const StyledCal = styled.div`
width: 2000px;
height: 1500px;
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

  const [dateState, setDateState] = useState(new Date());
  let [arrayDate, setArrayDate] = useState([]);
  let [arrayDateTime, setArrayDateTime] = useState([]);


  useEffect(() => {
    let arrayDate2 = [];
    let arrayDate3 = [];

    const date = moment(dateState).format('MMMM Do YYYY');

    for (var i = 0; i<patientStatistics.length; i++){
      for(var j = 0; j<patientStatistics[i].watchedTime.length; j++){
        if (moment(patientStatistics[i].watchedTime[j]).format('MMMM Do YYYY') === date){
          arrayDate2.push(patientStatistics[i]);
          break;
        }else{
        }
      }
    }
    setArrayDate(arrayDate2);

    let counter = 0;
    for(var k = 0; k<arrayDate2.length; k++){
      for(var l = 0; l<arrayDate2[k].watchedTime.length; l++){
        if (moment(arrayDate2[k].watchedTime[l]).format('MMMM Do YYYY') === date){
          counter++;
        }
      }
    if(counter !== 0){
      arrayDate3.push(counter);}
      counter = 0;
    }
    setArrayDateTime(arrayDate3);
  }, [dateState]);

  const changeDate = (e) => {
    setDateState(e)
}


  return (
    <AdminLayout>
      <ContentContainer>
        <StyledContainer>
          <>
            <h2>Statistik</h2>
            <br />
            <StyledPatient>
              <strong>Patient-id: </strong>
              {patient.name}
            </StyledPatient>
          </>
          <ButtonContainer>
          <Button onClick={handleSelectExcersice}>Välj övningar</Button>
            {patientStatus ? (
              <Button onClick={customPatientInactive} icon="patientInactive">
                Gör patient inaktiv
              </Button>
            ) : (
              <Button onClick={customPatientActive} icon="patientActive">
                Gör patient aktiv
              </Button>
            )}
            <Button onClick={customDeletePatient} icon="trash" outlinedTheme>
              Radera patient
            </Button>
          </ButtonContainer>
          <hr/>
          <br/>
          <>
          <StyledValdaOvningar>
            <h2>Valda Övningar </h2>
            <br/>
            {patientStatistics.map((stats) => (
              <>
                {(() => {
                  if (stats.amountOfTimes != undefined) {
                    return (
                      <>
                      <ListPanelWrapper>
          <ListPanel>
                        <h3><StyledHr/><br/>
                          {stats.vidTitle}
                          <p>Antal gånger per dag: {stats.amountOfTimes}</p>
                        <p>Antal sets per gång: 3</p>
                        <p>Antal reps per set: 15</p>
                        </h3>
                        <StyledButton>
                        <Button
                          onClick={() =>
                            customDeleteSelectedExercise(
                              patient.name,
                              stats.vidId
                            )
                          }
                          icon="trash" outlinedTheme
                        />
                        </StyledButton>
                        </ListPanel>
        </ListPanelWrapper>
                      </>
                    );
                  }
                })()}
              </>
            ))}</StyledValdaOvningar>
          </>

        </StyledContainer>
        <hr/>
        <br/>

        
            
          <StyledClendar>
            <h2>Kalender</h2>

          
        <Calendar value={dateState} onChange={changeDate}/>
        <p>Valt datum är <b>{moment(dateState).format('LL')}</b></p></StyledClendar>

        <ListPanelWrapper>
          <ListPanel>
          {arrayDate.map((stat, index) => (
            <React.Fragment key={stat.vidId}>
              <StyledStatistics>
                <br />
                <strong>Video: </strong>
                  <StyledLink to={`../exercise/${stat.vidId}`}>{stat.vidTitle}</StyledLink>
                <br />
                <strong>Antal gånger idag: {arrayDateTime[index]}</strong>     
                <br />
                <strong>Antal förväntade idag: </strong>
                  3
                  {/*<p>{stat.amountOfTimes}</p>*/}
              </StyledStatistics>
            </React.Fragment>
          ))}
        
        
        </ListPanel>
        </ListPanelWrapper>

      
        <StyledChart>
          <StatisticsChart patientStatistics={patientStatistics} />
        </StyledChart>
        </ContentContainer>
      
    </AdminLayout>
  );
  
};



export default PatientStatistics;



                  /*<p style={{ marginTop: 5 }} key={index}> 
                   {time.replace("T", ", ").slice(0, -8)}
                  </p>*/