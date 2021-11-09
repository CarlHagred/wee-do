import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllVideos } from "../../api";
import AdminLayout from "../../components/admin/AdminLayout";
import SearchBar from "../../components/common/SearchBar";
import styled from "styled-components";
import { Flexbox, VideoItem } from "../../components/common/Flexbox";


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
  }, [videos]);
  return (
    <AdminLayout>
      <SearchBar
        placeholder="Sök efter en övning... "
        onChange={(e) => {
          setSearchedName(e.target.value);
        }}
      />
      <StyledH1> 
        Övningar
      </StyledH1>
      <Flexbox>
        {videos
          .filter((videos) => {
            return videos.videoTitle.includes(searchedName) ? videos : null;
          })
          .map((videos) => (
            <VideoItem key={videos._id}>
              <Link
                    to={`/admin/exercise/${videos.videoId}`}
                    target="_blank"
                    key={videos._id}
                  >
                  <StyledTitle>
                  
                    {videos.videoTitle}
                  
                  </StyledTitle>
                
                  <br></br>
                  <img src={videos.thumbnail} alt="profile pic" width="250px" height="200px" />
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
      <footer></footer>
    </AdminLayout>
  );
};
export default SearchExercise;

/*

 <StyledTable>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <td>Övningar</td>
          </tr>
        </thead>
        {videos
          .filter((videos) => {
            return videos.videoTitle.includes(searchedName) ? videos : null;
          })
          .map((videos) => (
            <tbody>
              <Link
                    to={`/admin/exercise/${videos.videoId}`}
                    target="_blank"
                    key={videos._id}
                  >
              <tr>
                <td>
                  <StyledTitle>
                  
                    {videos.videoTitle}
                  
                  </StyledTitle>
                
                  <br></br>
                  <img src={videos.thumbnail} alt="profile pic" width="250px" height="200px" />
                  <br></br>
                  <br></br>
                  Antal visningar: {videos.__v}
                </td>
              </tr>
              <br></br>
              <br></br>
              <br></br>
              </Link>
            </tbody>
          ))}
      </StyledTable>

*/









