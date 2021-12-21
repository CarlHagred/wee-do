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
    if(counter != 0){
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
        </StyledContainer>


        <ListPanelWrapper>
          <ListPanel>
        <Calendar value={dateState} onChange={changeDate}/>
        <p>Valt datum är <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
        <>
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
        </>
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