import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";
import { ImQrcode } from "react-icons/im";

import { getSession, getMyVideos } from "../../api/index";
import PatientLayout from "../../components/patient/PatientLayout";

const NavContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.palette.brand};
  border-radius: 2em;
  position: relative;
  padding: 1.2em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  height: 180px;
  &:hover {
    border-style: solid;
    background-color: ${(props) => props.theme.palette.hover};
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

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  align-content: center;
  margin: 3em auto 0 auto;
  @media (max-width: 1085px) {
    max-width: 660px;
  }
  @media (max-width: 768px) {
    max-width: 328px;
    min-width: 250px;
  }
`;

const VideoContainer = styled.div`
  height: 260px;
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

const StyledHoverText = styled.div`
  font-size: 32px;
  padding: 16px 32px;
  color: white;
`;

const StyledHeader = styled.h1`
  font-size: 2em;
  padding-bottom: 1em;
  font-weight: 600;
`;

const ExerciseContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2.4em;
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
        console.log('Error occured fetching videos with amount of times left'); 
      }
    };
    fetchData();
  }, []);
  
  return (
    <PatientLayout>
      <StyledContentContainer>
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
                  <StyledVideoTitle>{video.vidTitle}</StyledVideoTitle>
                  <StyledVideoText>
                    Du har gjort denna: {video.amountOfTimes} gånger
                  </StyledVideoText>
                </VideoContainer>
              </Link>
            );
          })}
          <NavContainer to="/QrScanner">
            <IconContainer>
              <ImQrcode size="80px" fill="white" />
            </IconContainer>
            <StyledText>Scanna övning</StyledText>
          </NavContainer>
        </ExerciseContainer>
      </StyledContentContainer>
    </PatientLayout>
  );
};

export default ToDo;
