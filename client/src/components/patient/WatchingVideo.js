import React, { useEffect, useState } from "react";
import { getSession, postWatchedVideo, getTitleById } from "../../api";
import { ThemeProvider } from "styled-components";
import PatientTheme from "../../themes/PatientTheme"; 
import Button from "../common/Button";
import styled from "styled-components";
import Header from "../common/Header"; 
import Footer from "../common/Footer"; 

const WatchExercise = () => {
  
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search);
  const videoUrl = params.get("title");

  const ytParams = "?rel=0&modestbranding=1";
  const vid = videoUrl + ytParams;
  const videoId = videoUrl.split("/").pop();

  const [patientName, setPatientName] = useState("");
  const [watchedVideo, setWatchedVideo] = useState(false);

  const [title, setTitle] = useState(null);
  const [titleFetched, setTitleFetched] = useState(false);  

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
  }, [title]); 

  const handleEvent = async () => {
    const handleClick = await postWatchedVideo(patientName, videoId);
    handleClick.data == "Success"
      ? setWatchedVideo(true)
      : setWatchedVideo(false);
  };
  const StyledH2 = styled.h2`
    font-size: 1.5em;
    text-align: auto;
    margin: 0.5rem 0em
  `
  
  return (
    <ThemeProvider theme={PatientTheme}>
      <Header/>
      <div className="content-media" style ={{margin: "1em",padding: '6rem 8em' }}> 
        <iframe src={vid} title="videoSpelare" width='600' height= '420' allowFullScreen></iframe>
        <div className="videoTitle">
          { titleFetched && <StyledH2>{title}</StyledH2> }
        </div> 
        {watchedVideo ? (
          <p>Bra jobbat!</p>
        ):(
          <div className="btn-Watched-Video">
            <Button onClick={handleEvent} style={{margin: '1em 0em'}}>
              Jag har tittat på övningen och gjort den
            </Button>
          </div>
          )
        }
      </div>
      <Footer/>
    </ThemeProvider>
  );
};
export default WatchExercise;