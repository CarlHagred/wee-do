import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled  from "styled-components";
import { useParams } from "react-router-dom";
import { deleteVideoIndex, getAllVideos } from "../../api";
import AdminLayout from "../../components/admin/AdminLayout";
import Button from "../../components/common/Button";
import ReactPlayer from "../../components/common/ReactPlayer";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em 0;
`;

const StyledTitle = styled.p`
  font-weight: bold;
  justify-content: center; 
  font-size: 24px
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

  const playerProps = {
    url: videoUrl,
    playing: false
  };

  return (
    <AdminLayout>
      <VideoContainer>
        <ReactPlayer {...playerProps} />
      </VideoContainer>
      <ButtonContainer>
        <div className="videoInfo" style={{ margin: "1em 0em" }}>
          {
            videos.filter((videos) => {
                    return videos.videoId.includes(videoId) ? videos : null;
              })
              .map((videos) => (
                <StyledTitle>
                  {videos.videoTitle}
                </StyledTitle>
              )
            )
          }
        </div>
        <Link to={`/admin/exercise/qrpreview/${videoId}`}>
          <Button icon="qrcode">Generera QR-kod</Button>
        </Link>
        <br></br>
        <Link to={`/admin/search/exercise`}>
          <Button onClick={handleEvent} icon="trash">
            Radera
          </Button>
        </Link>
      </ButtonContainer>
    </AdminLayout>
  );
};
export default Video;