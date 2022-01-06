import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import ConfettiExplosion from "@reonomy/react-confetti-explosion";
import { FaThumbsUp } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import { pulse, bounce } from "react-animations";

import {
  getSession,
  postWatchedVideo,
  getTitleAndDescById,
  getOnePatient,
} from "../../api";

import PatientLayout from "./PatientLayout";
import Button from "../common/Button";
import ReactPlayer from "../common/ReactPlayer";

const StyledIcon = styled(FaThumbsUp)`
  margin-bottom: 5px;
  margin-left: 2px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 0 auto;
  gap: 10px;
  padding: 15px 10px 0 10px;
  @media (min-width: 769px) {
    flex-direction: row;
    padding: 15px 0 0 0;
  }
  @media (min-width: 850px) {
    padding: 15px 0 0 0;
    max-width: 850px;
  }
`;

const Left = styled.div`
  flex: 2;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 50px 0;
  @media (min-width: 769px) {
    padding: 0 20px;
  }
`;

const StyledActiveButton = styled(Button)`
  animation: 1s ${keyframes`${pulse}`};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 0 auto;
  gap: 10px;
  padding: 15px 10px 0 10px;
  @media (min-width: 769px) {
    padding: 15px 0 0 0;
  }
  @media (min-width: 850px) {
    padding: 15px 0 0 0;
    max-width: 850px;
  }
`;

const StyledVideoTitle = styled.h2`
  font-weight: 600;
  font-size: 1.2em;
  @media (min-width: 769px) {
    font-size: 1.5em;
  }
`;

const StyledVideoText = styled.div`
  color: #787878;
  font-size: 1em;
  @media (min-width: 769px) {
    font-size: 1.3em;
  }
`;

const StyledDivider = styled.hr`
  display: none;
  @media (min-width: 769px) {
    display: block;
    margin-top: 0.7em;
    border: 1px solid;
    border-color: #d9d9d9;
    max-width: 850px;
  }
`;

const StyledInactiveHint = styled.div`
  font-size: 1.3em;
  font-style: italic;
  margin-top: 10px;
`;

const StyledReward = styled.div`
  animation: 3s ${keyframes`${bounce}`};
  background-color: #41bbc7;
  padding: 20px 25px;
  border-radius: 50%;
  color: #ffffff;
  font-size: 30px;
  width: 80px;
  position: absolute;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const StyledConfettiShown = styled.div`
  position: fixed;
`;

const WatchExercise = () => {
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search);
  const videoUrl = params.get("title");

  const vid = videoUrl;
  const videoId = videoUrl.split("/").pop();

  const [scene, setScene] = useState(1);
  const [isExploding, setIsExploding] = useState(false);

  const [patientName, setPatientName] = useState("");
  const [active, setActive] = useState(true);

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [isTitleAndDescFetched, setIsTitleAndDescFetched] = useState(false);

  const [patientStatistics, setPatientStatistics] = useState([]);
  const [patient, setPatient] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSession = await getSession();
      setPatientName(fetchedSession.data.name);
      const fetchPatient = await getOnePatient(fetchedSession.data.name);
      setActive(fetchPatient.data.active);
      setPatient(fetchPatient.data.statistics);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const titleAndDesc = async (id) => {
      const response = await getTitleAndDescById(id);
      setTitle(response.title);
      setDescription(response.description);
      setIsTitleAndDescFetched(true);
    };
    titleAndDesc(videoId);
  }, [videoId]);

  const handleEvent = async () => {
    const handleClick = await postWatchedVideo(
      patientName,
      videoId,
      active,
      title
    );
    if (handleClick.data === "Success") {
      setScene(3);

      setTimeout(() => setIsExploding(true), 300);
      setTimeout(() => setIsExploding(false), 4000);
      setTimeout(() => setScene(4), 4000);

      const date = new Date();

      patient.forEach((stat) => {
        let counter = 1;
        if (stat.vidId === videoId) {
          for (let i = 0; i < stat.watchedTime.length; i++) {
            const todayDate = date.toISOString().substring(0, 10);
            const statDates = stat.watchedTime[i].substring(0, 10);

            if (todayDate === statDates) {
              counter++;
            }
          }
          let amountOfTimesLeft = stat.amountOfTimes - counter;
          if (amountOfTimesLeft >= 0) {
            setPatientStatistics(amountOfTimesLeft);
          } else {
            setPatientStatistics(0);
          }
        }
      });
    }
    if (handleClick.data === "Inactive") {
      setScene(3);

      setTimeout(() => setIsExploding(true), 300);
      setTimeout(() => setIsExploding(false), 4000);
      setTimeout(() => setScene(5), 4000);
    }
  };

  const playerProps = {
    url: vid,
    playing: false,
    onEnded: () => {
      setScene(2);
    },
  };

  const patientStats = patient.find((element) => element.vidId === videoId);

  if (!patientStats) {
    return <div />;
  }
  return (
    <PatientLayout>
      <ReactPlayer {...playerProps} />

      <Wrapper>
        {isTitleAndDescFetched && (
          <Left>
            <StyledVideoTitle>{title}</StyledVideoTitle>
            <StyledVideoText>
              Du ska göra övningen {patientStats.amountOfTimes} gånger per dag
            </StyledVideoText>
            <StyledVideoText>
              Du ska göra {patientStats.set} sets av repetitioner
            </StyledVideoText>
            <StyledVideoText>
              Du ska göra {patientStats.rep} repetitioner
            </StyledVideoText>
          </Left>
        )}

        <Right>
          {scene === 1 && (
            <ButtonContainer>
              <Button
                data-tip
                data-for="watchVideo"
                disabledTooltip
                size="auto"
              >
                Jag har gjort övningen
              </Button>
              <ReactTooltip id="watchVideo" place="bottom" effect="solid">
                Du måste se klart videon innan du kan trycka på knappen!
              </ReactTooltip>
            </ButtonContainer>
          )}

          {scene === 2 && (
            <ButtonContainer>
              <StyledActiveButton size="auto" onClick={handleEvent}>
                Jag har gjort övningen
              </StyledActiveButton>
            </ButtonContainer>
          )}

          {scene === 3 && (
            <>
              <StyledReward>
                <StyledIcon />
                {isExploding && (
                  <StyledConfettiShown>
                    <ConfettiExplosion
                      force={0.6}
                      duration={4000}
                      particleCount={150}
                      floorHeight={1500}
                      floorWidth={1600}
                    />
                  </StyledConfettiShown>
                )}
              </StyledReward>
            </>
          )}

          {scene === 4 && (
            <>
              <StyledInactiveHint>Jättebra jobbat!</StyledInactiveHint>
              <p>Du har {patientStatistics} gånger kvar att göra idag!</p>
            </>
          )}

          {scene === 5 && (
            <>
              <StyledInactiveHint>
                Jättebra jobbat, men du är inaktiv så din statistik sparas inte.
              </StyledInactiveHint>
            </>
          )}
        </Right>
      </Wrapper>
      <TextContainer>
        <StyledDivider />
      </TextContainer>
      <ActionContainer></ActionContainer>
    </PatientLayout>
  );
};
export default WatchExercise;
