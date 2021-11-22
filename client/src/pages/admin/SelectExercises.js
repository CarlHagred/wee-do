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

  const options = [
    { value: 1 },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
  ];

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

  const handleOnChange = (position, id) => {
    let arr = [...checkedState];
    arr[position] = !arr[position];
    setCheckedState(arr);
  };

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
    console.log(selected);
  }, [checkedState, amount]);

  const handleChange = (value, index, id) => {
    let newArr = [...amount];
    newArr[index] = parseInt(value);
    setAmount(newArr);
  };

  const handleSubmit = () => {
    let newArr;
    let arr = [...selected];
    arr.forEach(function (value, i) {
      value.amount = amount[i];
      newArr[i] = value;
    });
    setAmount(newArr);
    console.log(amount);
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
                        handleChange(e.target.value, index, videos.videoId);
                      }}
                    >
                      {options.map((option) => (
                        <option value={option.value}>
                          Antal gånger per dag: {option.value}
                        </option>
                      ))}
                    </select>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index, videos.videoId)}
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
