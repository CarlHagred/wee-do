import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { deleteVideoIndex, getAllVideos, getTitleAndDescById } from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import Button from "../../components/common/Button";
import ReactPlayer from "../../components/common/ReactPlayer";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  margin: 0 auto;
  gap: 10px;
  padding: 15px 10px 0 10px;
  @media (min-width: 650px) {
    padding: 15px 0 0 0;
  }
`;

const StyledVideoTitle = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
`;

const StyledVideoText = styled.p`
  color: #787878;
`;

const StyledDivider = styled.hr`
  align-content: center;
  width: 100%;
  margin-top: 0.5em;
  border: 1px solid;
  border-color: #d9d9d9;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 5px;
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
    playing: false,
  };

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [isTitleAndDescFetched, setIsTitleAndDescFetched] = useState(false);

  useEffect(() => {
    const titleAndDesc = async (id) => {
      const response = await getTitleAndDescById(id);
      setTitle(response.title);
      setDescription(response.description);
      setIsTitleAndDescFetched(true);
    };
    titleAndDesc(videoId);
  }, [videoId]);

  return (
    <AdminLayout>
      <ReactPlayer {...playerProps} />
      {isTitleAndDescFetched && (
        <TextContainer>
          <StyledVideoTitle>{title}</StyledVideoTitle>
          <StyledVideoText>{description}</StyledVideoText>
          <StyledDivider />
        </TextContainer>
      )}

      <ActionContainer>
        <ButtonContainer>
          <Link to={`/admin/exercise/qrpreview/${videoId}`}>
            <Button icon="qrcode">Generera QR-kod</Button>
          </Link>

          <Link to={`/admin/search/exercise`}>
            <Button onClick={handleEvent} icon="trash">
              Radera
            </Button>
          </Link>
        </ButtonContainer>
      </ActionContainer>
    </AdminLayout>
  );
};
export default Video;
