import React, { useEffect, useState } from "react";
import { getSession, postWatchedVideo, getTitleById } from "../../api";
import { ThemeProvider } from "styled-components";
import PatientTheme from "../../themes/PatientTheme"; 
import Button from "../common/Button";
import styled from "styled-components";
import Header from "../common/Header"; 

const StyledH2 = styled.h2`
    font-size: 1.5em;
    text-align: auto;
    margin: 0.5rem 0em
`;

const WatchExercise = () => {
  
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search);
  const videoUrl = params.get("title");

  const ytParams = "?rel=0&modestbranding=1";
  const vid = videoUrl + ytParams;
  const videoId = videoUrl.split("/").pop();

  const [patientName, setPatientName] = useState("");
 // const [watchedVideo, setWatchedVideo] = useState(false);

  const [title, setTitle] = useState(null);
  const [titleFetched, setTitleFetched] = useState(false);  

  const [buttonInnerText, setButtonInnerText] = useState("Jag har tittat på övning och gjort den"); 
  const [buttonBackground, setButtonBackground] = useState('red'); 

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSession = await getSession();
      setPatientName(fetchedSession.data.name);
    };
    fetchData();
  }, []);

  //UseEffect to fetch video title down
  useEffect(() => {
    const getTitle = async (id) => {
      const titleRecieved =  await getTitleById(id);
      setTitle(titleRecieved);  
      setTitleFetched(true); 
    }; 
    getTitle(videoId); 
  }); 

  const handleEvent = async () => {
    await postWatchedVideo(patientName, videoId);
    //handleClick.data == "Success"
    //  ? setWatchedVideo(true)
    //  : setWatchedVideo(false); 

      setButtonBackground('green'); 
      setButtonInnerText('Bra jobbat...!'); 
  };
  
  return (
    <ThemeProvider theme={PatientTheme}>
      <Header/>
      <div className="content-media" style ={{margin: "1em",padding: '6rem 20em' }}> 
        <iframe src={vid} title="videoSpelare" width='600' height= '420' allowFullScreen></iframe>
        <div className="videoTitle">
          { titleFetched && <StyledH2>{title}</StyledH2> }
        </div> 
          <div className="btn-Watched-Video">
            <Button onClick={handleEvent} style={{margin: '1em 0em', background: `${buttonBackground}`}}>
              {buttonInnerText}
            </Button>
          </div>
      </div>
    </ThemeProvider>
  );
};
export default WatchExercise;