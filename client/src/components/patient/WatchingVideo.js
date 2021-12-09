import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import ConfettiExplosion from "@reonomy/react-confetti-explosion";
import { FaThumbsUp } from "react-icons/fa";
import { bounce } from "react-animations";
import ReactTooltip from "react-tooltip";
import { shakeHead, pulse } from "react-animations";

import {
  getSession,
  postWatchedVideo,
  getTitleAndDescById,
  getOnePatient,
} from "../../api";

import PatientLayout from "./PatientLayout";
import Button from "../common/Button";
import ReactPlayer from "../common/ReactPlayer";

const StyledDisabledButton = styled(Button)``;

const StyledActiveButton = styled(Button)`
  animation: 1s ${keyframes`${pulse}`};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  margin: 0.5em auto 0 auto;
  padding: 0 5px;
  gap: 5px;
`;

const StyledVideoTitle = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
`;

const StyledVideoText = styled.p`
  color: #787878;
`;

const StyledDivider = styled.hr`
  align-content: center;
  width: 100%;
  margin-top: 0.5em;
  border: 1px solid;
  border-color: #d9d9d9;
`;

const StyledInactiveHint = styled.p`
  font-size: 1.3em;
  font-style: italic;
  margin-top: 10px;
`;

const StyledReward = styled.p`
  animation: 3s ${keyframes`${bounce}`};
  background-color: #41bbc7;
  padding: 20px 25px;
  border-radius: 50%;
  color: #ffffff;
  font-size: 30px;
`;

const StyledConfettiShown = styled.div`
  position: fixed;
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

const ConfettiContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WatchExercise = () => {
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search);
  const videoUrl = params.get("title");

  const vid = videoUrl;
  const videoId = videoUrl.split("/").pop();

  const [videoEnded, setVideoEnded] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [exerciseDone, setExerciseDone] = useState(false);

  const [patientName, setPatientName] = useState("");
  const [active, setActive] = useState(true);
  const [showActive, setShowActive] = useState(false);

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [isTitleAndDescFetched, setIsTitleAndDescFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSession = await getSession();
      setPatientName(fetchedSession.data.name);
      const fetchPatient = await getOnePatient(fetchedSession.data.name);
      setActive(fetchPatient.data.active);
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
    const handleClick = await postWatchedVideo(patientName, videoId, active);
    if (handleClick.data === "Success") {
      setExerciseDone(true);

      setTimeout(() => setIsExploding(true), 300);
      setTimeout(() => setIsExploding(false), 4000);
    }
    if (handleClick.data === "Inactive") {
      setShowActive(true);
      setExerciseDone(true);
      setTimeout(() => setIsExploding(true), 300);
      setTimeout(() => setIsExploding(false), 4000);
    }
  };

  const playerProps = {
    url: vid,
    playing: false,
    onEnded: () => {
      setVideoEnded(true);
    },
  };

  return (
    <PatientLayout>
      <ReactPlayer {...playerProps} />
      {isTitleAndDescFetched && (
        <TextContainer>
          <StyledVideoTitle>{title}</StyledVideoTitle>
          <StyledVideoText>{description}</StyledVideoText>
          <StyledDivider />
        </TextContainer>
      )}
      <ConfettiContainer>
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
      </ConfettiContainer>

      <ActionContainer>
        {videoEnded && !exerciseDone ? (
          <ButtonContainer>
            <StyledActiveButton onClick={handleEvent}>
              Jag har gjort övningen
            </StyledActiveButton>
          </ButtonContainer>
        ) : null}

        {exerciseDone && !showActive ? (
          <>
            <StyledReward>
              <FaThumbsUp />
            </StyledReward>
            <StyledInactiveHint>Jättebra jobbat!</StyledInactiveHint>
          </>
        ) : null}

        {!videoEnded && (
          <ButtonContainer>
            <StyledDisabledButton
              data-tip
              data-for="watchVideo"
              disabledTooltip
            >
              Jag har gjort övningen
            </StyledDisabledButton>
            <ReactTooltip id="watchVideo" place="bottom" effect="solid">
              Du måste se klart videon innan du kan trycka på knappen!
            </ReactTooltip>
          </ButtonContainer>
        )}

        {showActive ? (
          <>
            <StyledReward>
              <FaThumbsUp />
            </StyledReward>
            <StyledInactiveHint>
              Jättebra jobbat, men du är inaktiv så din statistik sparas inte.
            </StyledInactiveHint>
          </>
        ) : null}
      </ActionContainer>
    </PatientLayout>
  );
};
export default WatchExercise;
