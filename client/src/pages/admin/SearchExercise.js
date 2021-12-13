import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getAllVideos } from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import SearchBar from "../../components/common/SearchBar";

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
  font-size: 1.2em;
  padding-bottom: 1em;
  font-weight: 600;
`;

const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.2em;
`;

const VideoContainer = styled.div`
  height: 260px;
`;

const StyledVideoTitle = styled.h1`
  font-weight: bold;
  width: 280px;
  padding-top: 10px;
  padding-bottom: 5px;
`;

const StyledVideoText = styled.p`
  font-size: 0.9em;
  color: darkgrey;
`;

const SearchExercise = () => {
  const [videos, setVideos] = useState([]);
  const [searchedName, setSearchedName] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const allVideos = await getAllVideos();
      setVideos(allVideos.data);
    };
    fetchData();
  }, []);
  return (
    <AdminLayout>
      <StyledContentContainer>
        <SearchBar
          placeholder="Sök efter en övning... "
          onChange={(e) => {
            setSearchedName(e.target.value);
          }}
        />
        <StyledHeader>Övningar</StyledHeader>
        <SearchResultContainer>
          {videos
            .filter((videos) => {
              return videos.videoTitle.includes(searchedName) ? videos : null;
            })
            .map((videos) => (
              <Link to={`/admin/exercise/${videos.videoId}`} key={videos._id}>
                <VideoContainer key={videos._id}>
                  <ThumbnailContainer>
                    <StyledThumbnail
                      src={videos.thumbnail}
                      alt="Video thumbnail"
                    />
                    <HoverContainer>
                      <StyledHoverText>VISA</StyledHoverText>
                    </HoverContainer>
                  </ThumbnailContainer>
                  <StyledVideoTitle>{videos.videoTitle}</StyledVideoTitle>
                  <StyledVideoText>
                    Antal visningar: {videos.__v}
                  </StyledVideoText>
                </VideoContainer>
              </Link>
            ))}
        </SearchResultContainer>
      </StyledContentContainer>
    </AdminLayout>
  );
};
export default SearchExercise;
