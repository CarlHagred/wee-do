import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getSession, getOnePatient } from "../../api";

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

const StyledParagraph = styled.p`
    margin: 20px;
    color: red;
    font-size: 1.5em;
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

    return (
        <PatientLayout>
            <StyledWrapper>
                <StyledHeader>Statistik</StyledHeader>
                
                {patientStatistics.map((stat) => (
                    <React.Fragment key={stat.vidId}>
                        <StyledStatistics>
                            <br/>
                            <p>
                                <strong>Video: </strong>{" "}
                                {stat.vidId}
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

            </StyledWrapper>
        </PatientLayout>
    );
};

export default Statistics;
