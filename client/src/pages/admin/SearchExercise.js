import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllVideos } from "../../api";
import AdminLayout from "../../components/admin/AdminLayout";
import SearchBar from "../../components/common/SearchBar";
import styled from "styled-components";


const StyledTable = styled.table`
  caption-side: top;
  border-collapse: separate;
  border-spacing: 5px;
  width: 100%;
  margin: 1em 0;
  justify-content: left;
  border-radius: 4px;

  td,
  th {
    padding: 5px 10px;
    border-radius: 4px;
    font-family: "Roboto", sans-serif;
    font-size: 1em;
    text-align: left;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: rgb(247, 247, 248, 100%);
    }
    :nth-of-type(even) {
      background-color: rgb(247, 247, 248, 100%);
    }
    :hover {
      background: rgb(108, 153, 255, 33%);
    }
  }
  thead td {
    background-color: #c2c2c2;
    border-radius: 4px;
    font-size: 1.2em;
  }
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
      <footer></footer>
    </AdminLayout>
  );
};
export default SearchExercise;









