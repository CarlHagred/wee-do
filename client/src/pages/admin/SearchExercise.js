import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getAllVideos } from "../../api";

import SearchBar from "../../components/common/SearchBar";
import { Flexbox, VideoItem } from "../../components/common/Flexbox";
import ContentContainer from "../../components/common/ContentContainer";

const StyledH1 = styled.h1`
  padding: 5px 10px;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  text-align: left;

  caption-side: top;
  border-collapse: separate;
  border-spacing: 5px;
  width: 100%;
  margin: 1em 0;
  justify-content: left;
  border-radius: 4px;

  background-color: #c2c2c2;
  border-radius: 4px;
  font-size: 1.2em;
`;

const StyledTitle = styled.p`
  font-weight: bold;
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
    <ContentContainer>
      <SearchBar
        placeholder="Sök efter en övning... "
        onChange={(e) => {
          setSearchedName(e.target.value);
        }}
      />
      <StyledH1>Övningar</StyledH1>
      <Flexbox>
        {videos
          .filter((videos) => {
            return videos.videoTitle.includes(searchedName) ? videos : null;
          })
          .map((videos) => (
            <VideoItem key={videos._id}>
              <Link to={`/admin/exercise/${videos.videoId}`} key={videos._id}>
                <StyledTitle>{videos.videoTitle}</StyledTitle>
                <br></br>
                <img
                  src={videos.thumbnail}
                  alt="profile pic"
                  width="250px"
                  height="200px"
                />
                <br></br>
                <br></br>
                Antal visningar: {videos.__v}
                <br></br>
                <br></br>
                <br></br>
              </Link>
            </VideoItem>
          ))}
      </Flexbox>
    </ContentContainer>
  );
};
export default SearchExercise;
