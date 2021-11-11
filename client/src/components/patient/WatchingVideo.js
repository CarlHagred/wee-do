import React, { useEffect, useState } from "react";
import { getSession, postWatchedVideo } from "../../api";
import { ThemeProvider } from "styled-components";
import PatientTheme from "../../themes/PatientTheme"; 
import StyledWrapper from "../../pages/patient/WatchingExercise"; 
import Button from "../common/Button";

const WatchExercise = () => {
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search);
  const title = params.get("title");

  const ytParams = "?rel=0&modestbranding=1";
  const vid = title + ytParams;
  const videoId = title.split("/").pop();

  const [patientName, setPatientName] = useState("");
  const [watchedVideo, setWatchedVideo] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSession = await getSession();
      setPatientName(fetchedSession.data.name);
    };
    fetchData();
  }, []);

  const handleEvent = async () => {
    const handleClick = await postWatchedVideo(patientName, videoId);
    handleClick.data == "Success"
      ? setWatchedVideo(true)
      : setWatchedVideo(false);
  };

  return (
    <ThemeProvider theme={PatientTheme}>
      
      <StyledWrapper>
          <div className="titleInput" style ={{margin: "1em"}}>
            <iframe src={vid} width="500" height="350" allowFullScreen></iframe>
          </div>
          {watchedVideo ? (
            <p>Bra jobbat!</p>
          ) : (
            <div className="btn-Watched-Video">
              <Button onClick={handleEvent}>
                Jag har tittat på övningen och gjort den
              </Button>
            </div>
          )}
      </StyledWrapper>
     </ThemeProvider>
  );
};
export default WatchExercise;
