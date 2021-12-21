import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getSession, getOnePatient } from "../../api";

import PatientLayout from "../../components/patient/PatientLayout";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  margin-bottom: 5%;
`;

const StyledHeader = styled.h1`
  font-size: 2em;
  padding: 1em;
  font-weight: 600;
`;

const StyledStatistics = styled.div`
  background-color: #e0eded;
  border-radius: 4px;
  padding: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 4%;
  margin-right: 4%;
  color: #22201c;
  :hover {
    background: #7dabab;
    cursor: pointer;
  }
`;

const StyledTitle = styled.p`
  font-weight: 600;
  font-size: 1.2em;
  @media (min-width: 769px) {
    font-size: 1.5em;
  }
`;

const StyledP = styled.p`
  padding: 5px 0;
`;

const Statistics = () => {
  const [patientStatistics, setPatientStatistics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUsername = await getSession();
      const fetchedPatient = await getOnePatient(fetchedUsername.data.name);
      setPatientStatistics(fetchedPatient.data.statistics);
    };
    fetchData();
  }, []);

  let stats = [];
  let date = new Date();
  patientStatistics.forEach((stat) => {
    let emptyObject = {};
    let counter = 0;
    for (let i = 0; i < stat.watchedTime.length; i++) {
      const todayDate = date.toISOString().substring(0, 10);
      const statDates = stat.watchedTime[i].substring(0, 10);

      if (todayDate === statDates) {
        counter++;
      }
    }
    let amountOfTimesLeft = stat.amountOfTimes - counter;
    if (amountOfTimesLeft >= 0) {
      emptyObject.vidId = stat.vidTitle;
      emptyObject.timesLeft = amountOfTimesLeft;
    } else {
      emptyObject.vidId = stat.vidTitle;
      emptyObject.timesLeft = 0;
    }
    stats.push(emptyObject);
  });

  return (
    <PatientLayout>
      <StyledWrapper>
        <StyledHeader>Statistik</StyledHeader>
        {stats.map((stat) => (
          <React.Fragment key={stat.vidId}>
            <StyledStatistics>
              <StyledTitle>{stat.vidId}</StyledTitle>
              <StyledP>
                Antal gånger kvar:
                {stat.timesLeft !== 0 ? stat.timesLeft : "Du är klar för idag!"}
              </StyledP>
            </StyledStatistics>
          </React.Fragment>
        ))}
      </StyledWrapper>
    </PatientLayout>
  );
};

export default Statistics;
