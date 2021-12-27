import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getAllVideos, getTitleAndDescById } from "../../api";

import QRCreator from "../../components/admin/QRCreator";
import ContentContainer from "../../components/common/ContentContainer";

const QRPreview = () => {
  const { id } = useParams();
  const [description, setDescription] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allVideos = await getAllVideos();
      setVideos(allVideos.data.find((x) => x.videoId === id));
    };
    const desc = async () => {
      const response = await getTitleAndDescById(id);
      setDescription(response.description);
    };
    fetchData();
    desc(id);
  }, [videos, id]);

  return (
    <ContentContainer>
      <QRCreator
        text={videos.videoTitle}
        id={id}
        image={videos.thumbnail}
        description={description}
      />
    </ContentContainer>
  );
};

export default QRPreview;
