import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled /*ThemeProvider*/ from "styled-components";
import { useParams } from "react-router-dom";

import { deleteVideoIndex, getAllVideos } from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import Button from "../../components/common/Button";

const StyledTitle = styled.p`
  font-weight: bold;
`;

const VideoContainer = styled.div`
  /*max-width: 1000px;
max-height: 750px;*/
  align-items: center;
  justify-content: center;
  display: flex;
  margin: auto;
  padding-bottom: 0.2em;
`;

const VideoItem = styled.div`
  padding: 0.2em;
`;

const Video = () => {
  const { videoId } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allVideos = await getAllVideos();
      setVideos(allVideos.data);
    };
    fetchData();
  }, [videos]);

  const handleEvent = () => {
    deleteVideoIndex(videoId);
  };

  const videoUrl = "https://www.youtube.com/embed/" + videoId;

  return (
    <AdminLayout>
      <p padding-top={"0.4em"} padding-bottom={"0.2em"}>
        {videos
          .filter((videos) => {
            return videos.videoId.includes(videoId) ? videos : null;
          })
          .map((videos) => (
            <StyledTitle>
              <p align="center">{videos.videoTitle}</p>
            </StyledTitle>
          ))}
      </p>
      <VideoContainer>
        <iframe
          title={videoUrl}
          width="540"
          height="315"
          src={videoUrl}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </VideoContainer>
      <VideoItem>
        <Link
          to={`/admin/exercise/qrpreview/${videoId}`}
          padding-bottom={"0.5em"}
          target="_blank"
        >
          <Button icon="qrcode">Generera QR-kod</Button>
        </Link>
      </VideoItem>
      <VideoItem>
        <Link to={`/admin/search/exercise`}>
          <Button onClick={handleEvent} icon="trash">
            Radera
          </Button>
        </Link>
      </VideoItem>
    </AdminLayout>
  );
};

export default Video;
