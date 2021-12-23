import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { getAllVideos, postSelectedExercises } from "../../api";

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
  const { name } = useParams();
  const [videos, setVideos] = useState([]);
  const [searchedName, setSearchedName] = useState("");
  const [amount, setAmount] = useState([]);
  const [set, setSet] = useState([]);
  const [rep, setRep] = useState([]);
  const [checkedState, setCheckedState] = useState([]);
  const [selected, setSelected] = useState([]);
  const history = useHistory();

  const amountOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const allVideos = await getAllVideos();
    setVideos(allVideos.data);
    let nerArr = Array(allVideos.data.length).fill(false);
    setCheckedState(nerArr);
    let amountArr = Array(allVideos.data.length).fill(1);
    setAmount(amountArr);
  };

  useEffect(() => {
    let newArr = [];
    checkedState.forEach((value, index) => {
      if (!value) return;

      let newSelection = {
        id: videos[index].videoId,
        title: videos[index].videoTitle,
        amount: parseInt(amount[index]),
        set: parseInt(set[index]),
        rep: parseInt(rep[index]),
      };
      newArr.push(newSelection);
    });
    setSelected(newArr);
  }, [checkedState, amount]);

  const handleCheckBoxChange = (position, id) => {
    let arr = [...checkedState];
    arr[position] = !arr[position];
    setCheckedState(arr);
  };

  const handleAmountChange = (value, index) => {
    let newArr = [...amount];
    newArr[index] = parseInt(value);
    setAmount(newArr);
  };

  const handleSetChange = (value, index) => {
    let newArr = [...set];
    newArr[index] = parseInt(value);
    setSet(newArr);
  };

  const handleRepChange = (value, index) => {
    let newArr = [...rep];
    newArr[index] = parseInt(value);
    setRep(newArr);
  };

  const handleSubmit = () => {
    if (selected.length === 0) return;
    postSelectedExercises(name, JSON.stringify(selected));
    history.goBack();
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
                        handleAmountChange(e.target.value, index);
                      }}
                    >
                      {amountOptions.map((option) => (
                        <option value={option}>GPD: {option}</option>
                      ))}
                    </select>
                    <select
                      value={set[index]}
                      onChange={(e) => {
                        handleSetChange(e.target.value, index);
                      }}
                    >
                      {amountOptions.map((option) => (
                        <option value={option}>SET: {option}</option>
                      ))}
                    </select>
                    <select
                      value={rep[index]}
                      onChange={(e) => {
                        handleRepChange(e.target.value, index);
                      }}
                    >
                      {amountOptions.map((option) => (
                        <option value={option}>REP: {option}</option>
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
