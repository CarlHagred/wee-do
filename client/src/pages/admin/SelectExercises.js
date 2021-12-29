import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { getAllVideos, postSelectedExercises } from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import SearchBar from "../../components/common/SearchBar";
import Button from "../../components/common/Button";
import CardLayout from "../../components/common/CardLayout";
import Card from "../../components/common/Card";
import TopWrapper from "../../components/common/TopWrapper";

const StyledCheckBox = styled.input`
  width: 1.8em;
  height: 1.8em;
`;

const StyledCard = styled(Card)`
  pointer-events: none;
  cursor: none;
`;

const CheckBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;

  font-size: 0.9em;
  margin: 0 3%;
  @media (min-width: 415px) {
    margin: 0;
  }
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
      <TopWrapper header="Välj övningar">
        <SearchBar
          placeholder="Sök efter en övning... "
          onChange={(e) => {
            setSearchedName(e.target.value);
          }}
        />
        <Button onClick={handleSubmit}>Spara övningar</Button>
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
          .map((videos, index) => (
            <div key={index}>
              <StyledCard
                key={videos._id}
                thumbnail={videos.thumbnail}
                title={videos.videoTitle}
              />
              <CheckBoxRow>
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
                <StyledCheckBox
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  checked={checkedState[index]}
                  onChange={() => handleCheckBoxChange(index, videos.videoId)}
                />
                <label for="checked"></label>
              </CheckBoxRow>
            </div>
          ))}
      </CardLayout>
    </AdminLayout>
  );
};

export default SelectExercises;
