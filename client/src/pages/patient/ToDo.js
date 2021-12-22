import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";
import { ImQrcode } from "react-icons/im";

import { getSession, getMyVideos } from "../../api/index";
import PatientLayout from "../../components/patient/PatientLayout";

const WrapTest = styled.div`
  width: 1000px;
  margin: auto;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Item = styled.div`
  width: 32%;
  padding-bottom: 18%; /* 32:18, i.e. 16:9 */
  margin-bottom: 2%; /* (100-32*3)/2 */
  background-color: green;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  background-color: lightblue;
  margin: 0 auto;
`;

const StyledHeader = styled.h1`
  font-size: 2em;
  padding-top: 1em;
  font-weight: 600;
  text-align: center;
`;

const ExerciseContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em auto;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2em;
    justify-content: center;
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
  width: 240px;
  margin: 2em auto;
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
      <Wrapper>
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
          <NavContainer to="/QrScanner">
            <IconContainer>
              <ImQrcode size="80px" fill="white" />
            </IconContainer>
            <StyledText>Scanna övning</StyledText>
          </NavContainer>
        </ExerciseContainer>
      </Wrapper>

      <WrapTest>
        <Container>
          {myVideos?.data?.data.map((video) => {
            return (
              <Item
                src={`https://img.youtube.com/vi/${video.vidId}/mqdefault.jpg`}
              ></Item>
            );
          })}
        </Container>
      </WrapTest>
    </PatientLayout>
  );
};

export default ToDo;
