import React, { useState, useEffect, Children } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Confirm } from "react-st-modal";
import { CustomDatalist, UserInput } from "../../components/common/UserInput";

import {
  deleteVideoIndex,
  getAllVideos,
  getTitleAndDescById,
  getAllActivePatients,
  getOnePatient,
} from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import Button from "../../components/common/Button";
import ReactPlayer from "../../components/common/ReactPlayer";

const handleSubmit = async (vid) => {
  const patient = document.getElementById("userInput").value.trim();
  if (!patient) {
    document.getElementById("userInput").style.borderColor = "#E83544";
    return;
  }
  if (!(await getOnePatient(patient)).data) {
    document.getElementById("userInput").style.borderColor = "#E83544";
    return;
  }
  window.location = `/admin/exercise/qrpreview/${vid}/${patient}`;
  document.getElementById("userInput").style.borderColor = "green";
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 0 auto;
  gap: 10px;
  padding: 15px 10px 0 10px;
  @media (min-width: 769px) {
    padding: 15px 0 0 0;
  }
  @media (min-width: 850px) {
    padding: 15px 0 0 0;
    max-width: 850px;
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

const Input = styled(UserInput)`
  width: 40%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 640px;
  justify-content: space-around;
  min-height: 100px;
  align-content: center;
  gap: 10px;
  @media (min-width: 769px) {
    height: 100px;
  }
`;

const Video = () => {
  let history = useHistory();
  const { videoId } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allVideos = await getAllVideos();
      setVideos(allVideos.data);
    };
    fetchData();
  }, [videos]);

  const customDeleteVideo = async () => {
    const conf = await Confirm(
      "Är du säker på att du vill radera denna video?",
      "Radera video",
      "Radera",
      "Avbryt"
    );
    if (conf) {
      deleteVideo();
      history.push("/admin/search/exercise");
    }
  };

  const deleteVideo = () => {
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
  const [patientsActive, setPatientsActive] = useState([]);

  useEffect(
    () => {
      const titleAndDesc = async (id) => {
        const response = await getTitleAndDescById(id);
        setTitle(response.title);
        setDescription(response.description);
        setIsTitleAndDescFetched(true);
      };
      const fetchData = async () => {
        const allActivePatients = await getAllActivePatients();
        setPatientsActive(allActivePatients.data);
      };
      titleAndDesc(videoId);
      fetchData();
    },
    [videoId],
    []
  );

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

      <ButtonContainer>
        <Input list="userList" id="userInput" placeholder="Patient..." />
        <CustomDatalist id="userList">
          {patientsActive
            .filter((patient) => {
              return patient.statistics.some((stats) => {
                return stats.vidId.includes(videoId);
              });
            })
            .map((patient) => (
              <option key={patient._id} value={patient.name} />
            ))}
        </CustomDatalist>
        <select id="selectedPatient" />
        <Button
          type="submit"
          icon="imageCard"
          onClick={() => {
            handleSubmit(videoId);
          }}
        >
          Generera Kort
        </Button>
        <Button
          onClick={customDeleteVideo}
          icon="trash"
          width="fixed"
          outlinedTheme
        >
          Radera
        </Button>
      </ButtonContainer>
    </AdminLayout>
  );
};
export default Video;
