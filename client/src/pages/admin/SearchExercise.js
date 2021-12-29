import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getAllVideos } from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import SearchBar from "../../components/common/SearchBar";
import CardLayout from "../../components/common/CardLayout";
import Card from "../../components/common/Card";
import TopWrapper from "../../components/common/TopWrapper";

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
      <TopWrapper header="Sök övning">
        <SearchBar
          placeholder="Sök efter en övning... "
          onChange={(e) => {
            setSearchedName(e.target.value);
          }}
        />
      </TopWrapper>

      <CardLayout>
        {videos
          .filter((videos) => {
            return videos.videoTitle
              .toLowerCase()
              .includes(searchedName.toLowerCase())
              ? videos
              : null;
          })
          .map((videos) => (
            <Link to={`/admin/exercise/${videos.videoId}`} key={videos._id}>
              <Card
                key={videos._id}
                thumbnail={videos.thumbnail}
                title={videos.videoTitle}
                text={`Antal visningar: ${videos.__v}`}
              />
            </Link>
          ))}
      </CardLayout>
    </AdminLayout>
  );
};
export default SearchExercise;
