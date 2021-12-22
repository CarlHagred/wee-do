import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";
import { ImQrcode } from "react-icons/im";

import { getSession, getMyVideos } from "../../api/index";
import PatientLayout from "../../components/patient/PatientLayout";

const StyledHeader = styled.h1`
  font-size: 2em;
  padding-top: 1em;
  font-weight: 600;
  text-align: center;
`;

const ExerciseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 1em auto;
  gap: 0.5em;
  @media (min-width: 415px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 1em 5em;
  }
  @media (min-width: 930px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 1em 5em;
  }
`;

const VideoContainer = styled.div`
  padding-bottom: 1.5em;
`;

const StyledThumbnail = styled.img`
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
`;

const HoverContainer = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;

const StyledHoverText = styled.div`
  font-size: 32px;
  padding: 16px 32px;
  color: white;
`;

const ThumbnailContainer = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.9);
  :hover ${StyledThumbnail} {
    opacity: 0.3;
  }
  :hover ${HoverContainer} {
    opacity: 1;
  }
`;

const TextContainer = styled.div`
  margin: 0 3%;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

const StyledVideoTitle = styled.h1`
  font-weight: bold;
  width: 280px;
  padding-top: 10px;
  padding-bottom: 5px;
  :hover {
    text-decoration: underline;
  }
`;

const StyledVideoText = styled.p`
  font-size: 0.9em;
`;

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
      <StyledHeader>Mina övningar</StyledHeader>
      <ExerciseContainer>
        {myVideos?.data?.data.map((video) => {
          return (
            <Link
              to={`/watch?title=http://www.youtube.com/embed/${video.vidId}`}
              key={video.vidId}
            >
              <VideoContainer>
                <ThumbnailContainer>
                  <StyledThumbnail
                    src={`https://img.youtube.com/vi/${video.vidId}/mqdefault.jpg`}
                  />
                  <HoverContainer>
                    <StyledHoverText>VISA</StyledHoverText>
                  </HoverContainer>
                </ThumbnailContainer>
                <TextContainer>
                  <StyledVideoTitle>{video.vidTitle}</StyledVideoTitle>
                  <StyledVideoText>
                    Du har gjort övningen: {video.amountOfTimes} gånger
                  </StyledVideoText>
                </TextContainer>
              </VideoContainer>
            </Link>
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
      </ExerciseContainer>
    </PatientLayout>
  );
};

export default ToDo;
