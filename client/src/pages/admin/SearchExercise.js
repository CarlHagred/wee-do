import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getAllVideos } from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import SearchBar from "../../components/common/SearchBar";
import ContentContainer from "../../components/common/ContentContainer";

const StyledHeader = styled.h1`
  font-size: 1.2em;
  padding-bottom: 1em;
  font-weight: 600;
`;

const StyledThumbnail = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin: 5px;
  :hover {
    box-shadow: 5px 10px 8px #888888;
  }
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
  :hover {
    text-decoration: underline;
  }
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
                  <StyledThumbnail
                    src={videos.thumbnail}
                    alt="Video thumbnail"
                  />

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
