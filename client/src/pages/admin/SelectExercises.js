import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getAllVideos } from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import SearchBar from "../../components/common/SearchBar";
import { Flexbox, VideoItem } from "../../components/common/Flexbox";
import ContentContainer from "../../components/common/ContentContainer";
import Button from "../../components/common/Button";

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

const StyledDiv = styled.div`
  font-size: 1.2em;
`;

const SelectExercises = () => {
  const [videos, setVideos] = useState([]);
  const [searchedName, setSearchedName] = useState("");
  const [amount, setAmount] = useState([]);
  const [checkedState, setCheckedState] = useState([]);
  const [selected, setSelected] = useState([]);

  const amountOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  useEffect(() => {
    const fetchData = async () => {
      const allVideos = await getAllVideos();

      setVideos(allVideos.data);

      let nerArr = Array(allVideos.data.length).fill(false);

      setCheckedState(nerArr);

      let amountArr = Array(allVideos.data.length).fill(1);

      setAmount(amountArr);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let newArr = [];
    checkedState.forEach((value, index) => {
      if (value) {
        let newSelection = {
          id: videos[index].videoId,
          amount: parseInt(amount[index]),
        };
        newArr.push(newSelection);
      }
    });
    setSelected(newArr);
  }, [checkedState, amount]);

  const handleCheckBoxChange = (position, id) => {
    let arr = [...checkedState];
    arr[position] = !arr[position];
    setCheckedState(arr);
  };

  const handleAmountChange = (value, index, id) => {
    let newArr = [...amount];
    newArr[index] = parseInt(value);
    setAmount(newArr);
  };

  const handleSubmit = () => {
    console.log(selected);
  };

  return (
    <AdminLayout>
      <ContentContainer>
        <Button onClick={handleSubmit}>spara övningar</Button>
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
            .map((videos, index) => (
              <li key={index}>
                <VideoItem key={videos._id}>
                  <StyledTitle>{videos.videoTitle}</StyledTitle>
                  <img
                    src={videos.thumbnail}
                    alt="profile pic"
                    width="250px"
                    height="200px"
                  />
                  <StyledDiv>
                    <select
                      value={amount[index]}
                      onChange={(e) => {
                        handleAmountChange(
                          e.target.value,
                          index,
                          videos.videoId
                        );
                      }}
                    >
                      {amountOptions.map((option) => (
                        <option value={option}>
                          Antal gånger per dag: {option}
                        </option>
                      ))}
                    </select>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      checked={checkedState[index]}
                      onChange={() =>
                        handleCheckBoxChange(index, videos.videoId)
                      }
                    />
                    <label for="checked"></label>
                  </StyledDiv>
                </VideoItem>
              </li>
            ))}
        </Flexbox>
      </ContentContainer>
    </AdminLayout>
  );
};

export default SelectExercises;
