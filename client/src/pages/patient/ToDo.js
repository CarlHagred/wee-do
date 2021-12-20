import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getSession, getMyVideos } from "../../api/index";
import PatientLayout from "../../components/patient/PatientLayout";
import styled from "styled-components";

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

const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.2em;
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
  color: darkgrey;
`;

const ToDo = () => {
  const [myVideos, setMyVideos] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSession();
        const name = data.data.name;
        const params = { name: name };
        const videoData = await getMyVideos(params);
        setMyVideos(videoData);
      } catch {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const videos = JSON.stringify(myVideos.data);

  return (
    <PatientLayout>
      <StyledContentContainer>
        <StyledHeader>Mina övningar</StyledHeader>
        <SearchResultContainer>
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
                    Du har gjort denna: {video.amountOfTimes} gånger{" "}
                  </StyledVideoText>
                </VideoContainer>
              </Link>
            );
          })}
        </SearchResultContainer>
      </StyledContentContainer>
    </PatientLayout>
  );
};

export default ToDo;
