import React, { useEffect, useState } from "react";
import { getSession, postWatchedVideo } from "../../api";
import { ThemeProvider } from "styled-components";
import PatientTheme from "../../themes/PatientTheme"; 
import Button from "../common/Button";
import styled from "styled-components";

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

  const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10rem;
  flex-direction: column; 
  text-align: center;
`;

  const StyledH2 = styled.h2`
  font-size: 3em;
  text-align: center;
`

  return (
      <Wrapper>
      <ThemeProvider theme={PatientTheme}>
          <div className="titleInput" style ={{margin: "1em"}}>
            <iframe src={vid} title="videoSpelare" width="900" height="600" allowFullScreen></iframe> 
          </div>
          <div>
          <StyledH2>title</StyledH2>
          </div>
          {watchedVideo ? (
            <p>Bra jobbat!</p>
          ) : (
            <div className="btn-Watched-Video">
              <Button Click={handleEvent}>
                Jag har tittat på övningen och gjort den
              </Button>
            </div>
          )}
          </ThemeProvider>
          </Wrapper>

  );
};
export default WatchExercise;
