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

  const [buttonInnerText, setButtonInnerText] = useState("Jag har utfört övningen");
  const [btnInfo, setBtnInfo] = useState({
    innerText: "", 
    display: "none", 
    background: "red", 
    clicked: true
  });
  
  const [btnDisabilityAndClickCount, setBtnDisabilityAndClickCount] = useState({disable: false, count:0}); 

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

  const handleClickWhileNotEnded = () => {
    setBtnInfo(
      {
        innerText: "Knappen kan först trykas på efter när du har sett klart övningen", 
        display: ""
      }
    )
    setTimeout(() => {
      setBtnInfo(
        {
          display: "none"
        }
      )
    }, 3000);
  }
  const handleClickWhileEnded = async () => {
    await postWatchedVideo(patientName, videoId);
    //handleClick.data == "Success"
    //  ? setWatchedVideo(true)
    //  : setWatchedVideo(false); 
    setBtnDisabilityAndClickCount({count: 1});
    setBtnInfo({background: "green"});
    setButtonInnerText("Bra jobbat...!");
    setBtnInfo({display: "none"});
    if(btnDisabilityAndClickCount.count > 0) {
      setBtnDisabilityAndClickCount({disable: true}); 
      setBtnInfo({innerText: 'Knappen kan tryckas på endast EN gång!'}); 
    }
  }

  const playerProps = {
    url: vid, 
    playing: true,
    onEnded: () =>{
      setBtnInfo({clicked: false}); 
      setBtnInfo({innerText: "Nu går det bra att trycka på knappen", display: ""});
    }
  }

  return (
    <PatientLayout>
      <ReactPlayer {...playerProps} />
      { isTitleAndDescFetched && 
        <div>
          <H2>{title}</H2>}
          <P>{description}</P>
        </div>
      }
      <div className="btn-Watched-Video">
        <Button
          disabled={btnDisabilityAndClickCount.disable}
          onClick={btnInfo.clicked ? handleClickWhileNotEnded : handleClickWhileEnded}
          style={{ margin: "1em 0em", background: `${btnInfo.background}` }}>
          {buttonInnerText}
        </Button>
        <P style={{display: btnInfo.display}}>{btnInfo.innerText}</P>
      </div>
    </PatientLayout>
  );
};
export default WatchExercise;