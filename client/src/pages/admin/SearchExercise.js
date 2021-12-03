import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getAllVideos } from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import SearchBar from "../../components/common/SearchBar";
import ContentContainer from "../../components/common/ContentContainer";

const Container = styled.div`
  position: relative;
  :hover {
    background: rgba(0, 0, 0, 0.9);
    opacity: 1;
  }
`;

const StyledImg = styled.img`
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
  :hover {
    opacity: 0.3;
  }
`;

const Middle = styled.div`
  position: absolute;
  transition: 0.5s ease;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  :hover {
    opacity: 1;
  }
`;

const Text = styled.p`
  :hover {
    background-color: #04aa6d;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
  }
`;

const SearchResultList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
`;

const VideoContainer = styled.div`
  height: 250px;
`;

const StyledH1 = styled.h1`
  font-size: 1.2em;
  padding-bottom: 1em;
  font-weight: 600;
`;

const StyledTitle = styled.h1`
  font-weight: bold;
  width: 250px;
  padding-top: 10px;
  padding-bottom: 5px;
`;

const StyledView = styled.div`
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
        <StyledH1>Övningar</StyledH1>
        <SearchResultList>
          {videos
            .filter((videos) => {
              return videos.videoTitle.includes(searchedName) ? videos : null;
            })
            .map((videos) => (
              <Link to={`/admin/exercise/${videos.videoId}`} key={videos._id}>
                <VideoContainer key={videos._id}>
                  <Container>
                    <StyledImg
                      src={videos.thumbnail}
                      alt="Video thumbnail"
                      width="250"
                      height="200"
                    />
                    <Middle>
                      <Text>Välj</Text>
                    </Middle>
                  </Container>
                  <StyledTitle>{videos.videoTitle}</StyledTitle>
                  <StyledView>Antal visningar: {videos.__v}</StyledView>
                </VideoContainer>
              </Link>
            ))}
        </SearchResultList>
      </ContentContainer>
    </AdminLayout>
  );
};
export default SearchExercise;
