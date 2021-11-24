import React, { useEffect, useState } from "react";
import { getSession, postWatchedVideo, getTitleAndDescById } from "../../api";
import Button from "../common/Button";
import PatientLayout from "./PatientLayout";
import ReactPlayer from "../common/ReactPlayer";

//import Header from "../common/Header";

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

  const handleEvent = async () => {
    await postWatchedVideo(patientName, videoId);
    //handleClick.data == "Success"
    //  ? setWatchedVideo(true)
    //  : setWatchedVideo(false);

    setButtonBackground("green");
    setButtonInnerText("Bra jobbat...!");
  };
  const { playing, controls, volume } = playerControls;
  return (
    <PatientLayout>
      <ReactPlayer />

      <div className="btn-Watched-Video">
        <Button
          disabled={watchedButtonDisabled}
          onClick={handleEvent}
          style={{ margin: "1em 0em", background: `${buttonBackground}` }}
        >
          {buttonInnerText}
        </Button>
      </div>
    </PatientLayout>
  );
};
export default WatchExercise;
