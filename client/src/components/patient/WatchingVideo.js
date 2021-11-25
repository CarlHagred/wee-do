import React, { useEffect, useState } from "react";

import { getOnePatient, getSession, postWatchedVideo } from "../../api";

const WatchExercise = () => {
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search);
  const title = params.get("title");

  const ytParams = "?rel=0&modestbranding=1";
  const vid = title + ytParams;
  const videoId = title.split("/").pop();

  const [patientName, setPatientName] = useState("");
  const [watchedVideo, setWatchedVideo] = useState(false);
  const [active, setActive] = useState(true);
  const [showActive, setShowActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSession = await getSession();
      setPatientName(fetchedSession.data.name);
      const fetchPatient = await getOnePatient(fetchedSession.data.name);
      setActive(fetchPatient.data.active);
      console.log(fetchPatient.data.active);
    };
    fetchData();
  }, []);

  const handleEvent = async () => {
    const handleClick = await postWatchedVideo(patientName, videoId, active);
    handleClick.data === "Success"
      ? setWatchedVideo(true)
      : setWatchedVideo(false);
    handleClick.data === "Inactive"
      ? setShowActive(true)
      : setShowActive(false);
  };

  return (
    <>
      <div className="titleInput">
        <iframe
          title={vid}
          src={vid}
          width="420"
          height="315"
          allowFullScreen
        />
      </div>
      {watchedVideo ? (
        <p>Bra jobbat!</p>
      ) : (
        <button onClick={handleEvent}>
          Jag har tittat på övningen och gjort den
        </button>       
      )}
      { showActive? <p>Jättebra jobbat, du är inaktiv så din statistik sparas inte. </p> : null}
    </>
  );
};

export default WatchExercise;
