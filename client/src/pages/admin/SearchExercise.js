import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getAllVideos } from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import SearchBar from "../../components/common/SearchBar";
import ContentContainer from "../../components/common/ContentContainer";

const StyledImg = styled.img`
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

const Container = styled.div`
  position: relative;

  :hover ${StyledImg} {
    opacity: 0.3;
  }

  :hover ${HoverContainer} {
    opacity: 1;
  }
`;
const StyledHoverText = styled.div`
  background-color: red;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
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
  gap: 1em;
`;

const VideoContainer = styled.div`
  height: 250px;
`;

const StyledVideoTitle = styled.h1`
  font-weight: bold;
  width: 250px;
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
      <ContentContainer>
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
                  <Container>
                    <StyledImg src={videos.thumbnail} alt="Video thumbnail" />
                    <HoverContainer>
                      <StyledHoverText>VÄLJ</StyledHoverText>
                    </HoverContainer>
                  </Container>

                  <StyledVideoTitle>{videos.videoTitle}</StyledVideoTitle>
                  <StyledVideoText>
                    Antal visningar: {videos.__v}
                  </StyledVideoText>
                </VideoContainer>
              </Link>
            ))}
        </SearchResultContainer>
      </ContentContainer>
    </AdminLayout>
  );
};
export default SearchExercise;
