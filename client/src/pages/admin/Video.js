import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled /*ThemeProvider*/ from "styled-components";
import { useParams } from "react-router-dom";

import { deleteVideoIndex, getAllVideos } from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import Button from "../../components/common/Button";
//import ContentContainer from "../../components/common/ContentContainer";

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
      <br></br>
      <p>
        {videos
          .filter((videos) => {
            return videos.videoId.includes(videoId) ? videos : null;
          })
          .map((videos) => (
            <StyledTitle>
              <p align="center">{videos.videoTitle}</p>
            </StyledTitle>
          ))}
        <br />
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
      <br></br>
      <Link to={`/admin/exercise/qrpreview/${videoId}`}>
        <Button icon="qrcode">Generera QR-kod</Button>
      </Link>
      <br></br>
      <Link to={`/admin/search/exercise`}>
        <Button onClick={handleEvent} icon="trash">
          Radera
        </Button>
      </Link>
    </AdminLayout>
  );
};

export default Video;
