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

        for (let i = 0; i < stat.watchedTime.length; i++) {
            let todayDate = date.toISOString().substring(0, 10);
            const statDates = stat.watchedTime[i].substring(0, 10);

            if(todayDate === statDates){
              counter++;
            }

            // Date variables 
            let startDate = parseInt(date);
            let endDate =  statDates;

            // Remove is ISO string formating to integer
            let noStringStatDates = endDate.replace('', '');
            let parsedStatDates = parseInt(noStringStatDates);

            console.log(startDate);
            console.log(parsedStatDates);

            console.log(startDate);
            console.log(endDate);

            console.log(startDate.getHours());
            console.log(endDate.getHours());

            console.log(startDate.getTime() - endDate.getTime());
            let ms = startDate.getTime() - endDate.getTime()
            
            let hours = (ms / (1000 * 60 * 60));
            console.log(hours);



            // Check if time between todayDate and statDates hasn't surpassed 24 hours
            //if(startDate - endDate < 24)
            if(hours < 24){
                // If counter is more than 1 today 
                if(counterStreak < 1 && todayDate ){
                    // Add to counter
                    counterStreak++
                }else{
                    break; // FUNGERAR?
                }
            }else{
                // If not the same day or haven't done the exerice during the 24 hours
                // Set counter too 0 again
                counterStreak = 0;
    
            }

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
            emptyObject.streak = counterStreak
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
                                <strong>Video: </strong>{" "}
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
