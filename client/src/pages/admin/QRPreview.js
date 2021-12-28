import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getAllVideos, getOnePatient, getTitleAndDescById } from "../../api";

import QRCreator from "../../components/admin/QRCreator";
import ContentContainer from "../../components/common/ContentContainer";

const QRPreview = () => {
  const { id } = useParams();
  const { patient } = useParams();
  const [description, setDescription] = useState(null);
  const [videos, setVideos] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const allVideos = await getAllVideos();
      setVideos(allVideos.data.find((x) => x.videoId === id));
    };
    const desc = async () => {
      const response = await getTitleAndDescById(id);
      setDescription(response.description);
    };
    const getPatient = async () => {
      const patientResponse = await getOnePatient(patient);
      setSelectedPatient(
        patientResponse.data.statistics.find((stats) => stats.vidId === id)
      );
    };
    fetchData();
    desc(id);
    getPatient();
  }, [videos, id, selectedPatient, patient]);

  return (
    <ContentContainer>
      <QRCreator
        text={videos.videoTitle}
        id={id}
        image={videos.thumbnail}
        description={description}
        patient={selectedPatient}
      />
    </ContentContainer>
  );
};

export default QRPreview;
