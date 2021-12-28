import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { ImQrcode } from "react-icons/im";

import { getSession, getMyVideos } from "../../api/index";
import PatientLayout from "../../components/patient/PatientLayout";
import CardLayout from "../../components/common/CardLayout";
import Card from "../../components/common/Card";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.palette.brand};
  border-radius: 2em;
  position: relative;
  padding: 1.2em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  height: 180px;
  width: 240px;
  margin: 1em auto;
  &:hover {
    border-style: solid;
    background-color: ${(props) => props.theme.palette.hover};
  }
  @media (min-width: 640px) {
    margin: 0 auto;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 160px;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.div`
  font-size: 1.2em;
  color: white;
`;

const ToDo = () => {
  const [myVideos, setMyVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSession();
        const name = data.data.name;
        const params = { name: name };
        const videoData = await getMyVideos(params);
        setMyVideos(videoData);
      } catch {
        console.log("Error occured fetching videos with amount of times left");
      }
    };
    fetchData();
  }, []);

  return (
    <PatientLayout>
      <CardLayout header="Mina övningar">
        {myVideos?.data?.data.map((video) => {
          return (
            <Card
              key={video.vidId}
              link={`/watch?title=http://www.youtube.com/embed/${video.vidId}`}
              thumbnail={`https://img.youtube.com/vi/${video.vidId}/mqdefault.jpg`}
              title={video.vidTitle}
              text={video.amountOfTimes}
            />
          );
        })}

        <NavLink to="/QrScanner">
          <NavContainer>
            <IconContainer>
              <ImQrcode size="80px" fill="white" />
            </IconContainer>
            <StyledText>Scanna övning</StyledText>
          </NavContainer>
        </NavLink>
      </CardLayout>
    </PatientLayout>
  );
};

export default ToDo;
