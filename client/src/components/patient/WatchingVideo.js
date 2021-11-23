import React, { useEffect, useState } from "react";
import { getSession, postWatchedVideo, getTitleAndDescById } from "../../api";
import { ThemeProvider } from "styled-components";
import PatientTheme from "../../themes/PatientTheme"; 
import Button from "../common/Button";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube"; 
import Footer from "../common/Footer";
import Navbar from "./PatientNavbar";
//import Header from "../common/Header"; 

const StyledH2 = styled.h2`
    font-size: 1.5em;
    text-align: auto;
    padding: 10px;
    font-weight: 600;
`;

const StyledParagraph = styled.p`
    color: gray;
    text-align: auto;
    padding: 10px;
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

  const [buttonInnerText, setButtonInnerText] = useState("Jag har tittat på övning och gjort den"); 
  const [buttonBackground, setButtonBackground] = useState('red'); 
  const [watchedButtonDisabled, SetWatchedButtonDisabled] = useState(true); 
  
  const ref = React.createRef(); 

  const [playerControls, setPlayerControls] = useState({
    playing: true,
    controls: false, 
    volume: 0.9
  }); 
 
  const playerVars = {
    youtube: {
      playerVars: { controls: 1, modestbranding: 1, rel: 0 }
    }
  }
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
      const response =  await getTitleAndDescById(id);
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

      setButtonBackground('green'); 
      setButtonInnerText('Bra jobbat...!'); 
  };
  const {playing, controls, volume} = playerControls; 
  return (
    <ThemeProvider theme={PatientTheme}>
      <Navbar/>
      <div className="content-media" style ={{margin: "1em",padding: '6rem 20em' }}> 
     
        <ReactPlayer url={vid} ref={ref}  width="640px" height="360px" playing={playing} 
        controls={controls} volume={volume} 
        config={playerVars}  
        onEnded={() => {
          
        //  const duration = parseFloat( ref.current.getDuration()).toFixed(); 
        //  const playedSec = ref.current.getCurrentTime(); 
          
         // if(duration === playedSeconds) console.log("Video is completely watched"); 

          //console.log("video length : "+duration);
          //console.log("video played in seconds : "+playedSec);
          SetWatchedButtonDisabled(false);  

        }}></ReactPlayer>
         <div className="videoTitle">
          { isTitleAndDescFetched && <StyledH2>{title}</StyledH2> }
          { isTitleAndDescFetched && <StyledParagraph className="description">{description}</StyledParagraph> }
        </div>
         
          <div className="btn-Watched-Video">
            <Button disabled={watchedButtonDisabled} onClick={handleEvent} style={{margin: '1em 0em', background: `${buttonBackground}`}}>
              {buttonInnerText}
            </Button>
          </div>
      </div>
      <Footer/>
    </ThemeProvider>
  );
};
export default WatchExercise;