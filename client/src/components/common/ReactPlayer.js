import React, { useEffect, useState } from "react";
import { getSession, postWatchedVideo, getTitleAndDescById } from "../../api";

import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

const ContentContainer = styled.div`
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 650px) {
    margin: 3em auto 0 auto;
  }
`;

const StyledReactPlayer = styled(ReactPlayer)`
  div {
    aspect-ratio: 16/9;
  }
`;

//import Header from "../common/Header";

const StyledH2 = styled.h2`
  font-size: 1.5em;
  padding: 10px;
  font-weight: 600;
`;

const StyledParagraph = styled.p`
  color: gray;
  padding: 10px;
`;

// *** React Player START ***
const ReactPlayerComponent = () => {
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
    "Jag har tittat på övning och gjort den"
  );
  const [buttonBackground, setButtonBackground] = useState("red");
  const [watchedButtonDisabled, SetWatchedButtonDisabled] = useState(true);

  const ref = React.createRef();

  const [playerControls, setPlayerControls] = useState({
    playing: true,
    controls: false,
    volume: 0.9,
  });

  const playerVars = {
    youtube: {
      playerVars: { controls: 1, modestbranding: 1, rel: 0 },
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      const fetchedSession = await getSession();
      setPatientName(fetchedSession.data.name);
    };
    fetchData();
  }, []);

  //UseEffect to fetch video title down
  useEffect(() => {
    const titleAndDesc = async (id) => {
      const response = await getTitleAndDescById(id);
      setTitle(response.title);
      setDescription(response.description);
      setIsTitleAndDescFetched(true);
    };
    titleAndDesc(videoId);
  });

  const { playing, controls, volume } = playerControls;
  return (
    <ContentContainer>
      <StyledReactPlayer
        url={vid}
        ref={ref}
        width="100%"
        height="100%"
        playing={playing}
        controls={controls}
        volume={volume}
        config={playerVars}
        onEnded={() => {
          //  const duration = parseFloat( ref.current.getDuration()).toFixed();
          //  const playedSec = ref.current.getCurrentTime();

          // if(duration === playedSeconds) console.log("Video is completely watched");

          //console.log("video length : "+duration);
          //console.log("video played in seconds : "+playedSec);
          SetWatchedButtonDisabled(false);
        }}
      />
      {isTitleAndDescFetched && <StyledH2>{title}</StyledH2>}
      {isTitleAndDescFetched && (
        <StyledParagraph className="description">{description}</StyledParagraph>
      )}
    </ContentContainer>
  );
};
export default ReactPlayerComponent;
// *** React Player END ***
