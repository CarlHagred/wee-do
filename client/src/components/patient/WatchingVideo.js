import React, { useEffect, useState } from "react";
import { getSession, postWatchedVideo } from "../../api";

const WatchExercise = () => {
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search);
  const title = params.get("title");
  console.log("title is: " + title);
  const ytParams = "?rel=0&modestbranding=1";
  const vid = title + ytParams;
  const videoId = title.split("/").pop();
  console.log(videoId);

  const [patientName, setPatientName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSession = await getSession();
      setPatientName(fetchedSession.data.name);
    };
    fetchData();
  }, []);

  const handleEvent = async () => {
    console.log(patientName);
    const handleClick = await postWatchedVideo(patientName, videoId);
    //handleClick == "Sucess" ? setstate : null;
  };

  return (
    <div>
      <div className="titleInput">
        <iframe src={vid} width="420" height="315" allowFullScreen></iframe>
      </div>
      <button onClick={handleEvent}>
        Jag har tittat på övningen och gjort den
      </button>
    </div>
  );
};

export default WatchExercise;
