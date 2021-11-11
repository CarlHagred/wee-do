import React, { useEffect, useState } from "react";

import { getSession, postWatchedVideo } from "../../api";

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
        handleClick.data === "Success"
            ? setWatchedVideo(true)
            : setWatchedVideo(false);
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
                ></iframe>
            </div>
            {watchedVideo ? (
                <p>Bra jobbat!</p>
            ) : (
                <button onClick={handleEvent}>
                    Jag har tittat på övningen och gjort den
                </button>
            )}
        </>
    );
};

export default WatchExercise;
