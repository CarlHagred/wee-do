import React, { useEffect, useState } from "react";
import { getSession, postWatchedVideo, getTitleAndDescById } from "../../api";
import Button from "../common/Button";
import PatientLayout from "./PatientLayout";
import ReactPlayer from "../common/ReactPlayer";
import styled from "styled-components";


const H2 = styled.h2`
  font-size: 1.5em;
  padding: 10px;
  font-weight: 600;
  text-align: center
`;

const P = styled.p`
  color: gray;
  padding: 10px;
  text-align: center
`;

const WatchExercise = () => {
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search);
  const videoUrl = params.get("title");

  const vid = videoUrl;
  const videoId = videoUrl.split("/").pop();

  const [patientName, setPatientName] = useState("");
  // const [watchedVideo, setWatchedVideo] = useState(false);

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [isTitleAndDescFetched, setIsTitleAndDescFetched] = useState(false);

  const [buttonInnerText, setButtonInnerText] = useState(
    "Jag har utfört övningen"
  );
  const [buttonBackground, setButtonBackground] = useState("red");
  const [watchedButtonDisabled, setWatchedButtonDisabled] = useState(true);
  const [textAboutBtn, setTextAboutBtn] = useState("Knappen kan tryckas på först efter när du har sett klart övningen");
  useEffect(() => {
    const fetchData = async () => {
      const fetchedSession = await getSession();
      setPatientName(fetchedSession.data.name);
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
  });

  const handleEvent = async () => {
    await postWatchedVideo(patientName, videoId);
    //handleClick.data == "Success"
    //  ? setWatchedVideo(true)
    //  : setWatchedVideo(false);
    setButtonBackground("green");
    setButtonInnerText("Bra jobbat...!");
  };

  const playerProps = {
    url: vid, 
    playing: true,
    onEnded: () =>{
      setWatchedButtonDisabled(false); 
      setTextAboutBtn("Nu går det bra att klicka på knappen"); 
      setTimeout(() => {
        setWatchedButtonDisabled(true);
        setTextAboutBtn("Knappen kan tryckas på endast EN gång");
      }, 3000) 
    }
  }

  return (
    <PatientLayout>
      <ReactPlayer {...playerProps} />
      { isTitleAndDescFetched && 
        <div>
          <H2>{title}</H2>
          <P>{description}</P>
        </div>
      }
      <div className="btn-Watched-Video">
        <Button
          disabled={watchedButtonDisabled}
          onClick={handleEvent}
          style={{ margin: "1em 0em", background: `${buttonBackground}` }}>
          {buttonInnerText}
        </Button>
      </div>
      <P>{textAboutBtn}</P>
    </PatientLayout>
  );
};
export default WatchExercise;