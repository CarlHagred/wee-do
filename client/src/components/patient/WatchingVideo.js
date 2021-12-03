import React, { useEffect, useState } from "react";
import {
  getSession,
  postWatchedVideo,
  getTitleAndDescById,
  getOnePatient,
} from "../../api";
import Button from "../common/Button";
import PatientLayout from "./PatientLayout";
import ReactPlayer from "../common/ReactPlayer";
import styled, { keyframes } from "styled-components";

import ConfettiExplosion from "@reonomy/react-confetti-explosion";
import { FaThumbsUp } from "react-icons/fa";
import { bounce } from "react-animations";

const StyledInactiveHint = styled.p`
  font-size: 0.9em;
  font-style: italic;
  margin-top: 20px;
`;

const StyledReward = styled.p`
  animation: 3s ${keyframes`${bounce}`};
  background-color: #41bbc7;
  padding: 20px 25px;
  border-radius: 50%;
  color: #ffffff;
  font-size: 30px;
  margin-top: 20px;
`;

const StyledConfettiShown = styled.div`
  position: fixed;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
`;

const H2 = styled.h2`
  font-size: 1.5em;
  padding: 10px;
  font-weight: 600;
  text-align: center;
`;

const P = styled.p`
  color: gray;
  padding: 10px;
  text-align: center;
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
    playing: true,
    onEnded: () => {
      setVideoEnded(true);
    },
  };
  return (
    <PatientLayout>
      <ReactPlayer {...playerProps} />
      <ButtonContainer>
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
      </ButtonContainer>
      {isTitleAndDescFetched && (
        <>
          <H2>{title}</H2>
          <P>{description}</P>
        </>
      )}

      <ButtonContainer>
        {videoEnded && !exerciseDone ? (
          <Button onClick={handleEvent}>Jag har gjort övningen</Button>
        ) : null}
        {exerciseDone && (
          <>
            <StyledReward>
              <FaThumbsUp />
            </StyledReward>
            <StyledInactiveHint>Jättebra jobbat!!</StyledInactiveHint>
          </>
        )}
        {!videoEnded && (
          <>
            <Button disabled>Jag har gjort övningen</Button>
            <P>Du måste se klart videon innan du kan trycka på knappen!</P>
          </>
        )}
        {showActive ? (
          <>
            <StyledInactiveHint>
              Jättebra jobbat, men du är inaktiv så din statistik sparas inte.
            </StyledInactiveHint>
          </>
        ) : null}
      </ButtonContainer>
    </PatientLayout>
  );
};
export default WatchExercise;
