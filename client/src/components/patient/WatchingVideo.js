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
import styled from "styled-components";


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

const Container = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center
`;

const WatchExercise = () => {
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search);
  const videoUrl = params.get("title");

  const vid = videoUrl;
  const videoId = videoUrl.split("/").pop();

  const [patientName, setPatientName] = useState("");
  const [watchedVideo, setWatchedVideo] = useState(false);
  const [active, setActive] = useState(true);
  const [showActive, setShowActive] = useState(false);
 

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [isTitleAndDescFetched, setIsTitleAndDescFetched] = useState(false);

  const [watchedButtonDisabled, setWatchedButtonDisabled] = useState(true);
 
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
    handleClick.data === "Success"
      ? setWatchedVideo(true)
      : setWatchedVideo(false);
    handleClick.data === "Inactive"
      ? setShowActive(true)
      : setShowActive(false);
    await postWatchedVideo(patientName, videoId);
  };

  const playerProps = {
    url: vid,
    playing: true,
    onEnded: () => {
      setWatchedButtonDisabled(false);
    },
  };

  return (
    <PatientLayout>
      <ReactPlayer {...playerProps} />
      {isTitleAndDescFetched && (
        <div>
          <H2>{title}</H2>
          <P>{description}</P>
        </div>
      )} <Container>
          {watchedVideo ? (
            <Button disabled={true} style={{background: "green"}}>Bra jobbat!</Button>
          ) : (
            <Button disabled={watchedButtonDisabled} onClick={handleEvent} style={{position: 'relative'}}>
              "Jag har utfört övningen"
            </Button>
          )}
          {showActive ? (
            <P>Jättebra jobbat, du är inaktiv så din statistik sparas inte. </P>
          ) : null
          }
        </Container>
    </PatientLayout>
  );
};
export default WatchExercise;