import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { 
    getSession, 
    getOnePatient, 
} from "../../api";

import PatientLayout from "../../components/patient/PatientLayout";

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

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 3rem;
    flex-direction: column;
    text-align: center;
`;
const StyledHeader = styled.h1`
    font-size: 3em;
`;

const Statistics = () => {
    const [patientStatistics, setPatientStatistics] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedUsername = await getSession();
            const fetchedPatient = await getOnePatient(fetchedUsername.data.name);
            setPatientStatistics(fetchedPatient.data.statistics);
        }
        fetchData();
    }, []);

    let stats = [];
    let date = new Date();
    patientStatistics.forEach((stat) => {
        let emptyObject = {};
        let counter = 0;
        let counterStreak = 0;
        let day = 0;

        for (let i = 0; i < stat.watchedTime.length; i++) {
            let todayDate = date.toISOString().substring(0, 10);
            const statDates = stat.watchedTime[i].substring(0,10);

            if(todayDate === statDates){
              counter++;
            }

            let amountOfTimesLeft =  stat.amountOfTimes - counter;
            if(amountOfTimesLeft === 0){
                day++
                todayDate = date.setDate(date.getDate() - day)
                counterStreak++
                emptyObject.streak = counterStreak;
                stats.push(emptyObject)
            }

            console.log(day);

          }
          let amountOfTimesLeft =  stat.amountOfTimes - counter;

          if(amountOfTimesLeft >= 0){
            emptyObject.vidTitle = stat.vidTitle;
            emptyObject.timesLeft = amountOfTimesLeft;
            emptyObject.streak = counterStreak;
          }
          else{
            emptyObject.vidTitle = stat.vidTitle;
            emptyObject.timesLeft = 0;
          }
          stats.push(emptyObject);
    })

    return (
        <PatientLayout>
            <StyledWrapper>
                <StyledHeader>Statistik</StyledHeader>
                {stats.map((stat) => (
                    <React.Fragment key={stat.vidId}>
                        <StyledStatistics>
                            <br/>
                            <p>
                                <strong>Video titel: </strong>{" "}
                                {stat.vidTitle}
                            </p>
                            <p>
                                <strong>Antal gånger kvar: </strong>
                                {stat.timesLeft !== 0 ? stat.timesLeft  : "Kom tillbaka imorgon, du är klar för idag!"}
                            </p>
                            <p>
                                <strong>Antal dagar på raken: </strong>
                                {stat.streak}
                            </p>
                            <br/>
                        </StyledStatistics>
                    </React.Fragment>
                ))}

            </StyledWrapper>
        </PatientLayout>
    );
};

export default Statistics;
