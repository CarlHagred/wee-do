import React from "react";
import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";

const StyledSearch = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  box-sizing: border-box;

  border: 2px solid #ccc;
  border-radius: 4px;

  font-size: 16px;
  background-color: white;

  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  padding: 8px 0px 8px 50px;
  width: 100%;
`;

const SearchBar = (props) => {
  return (
    <StyledSearch>
      <IoMdSearch
        style={{ marginLeft: "0.5rem", position: "absolute" }}
        color="#707070"
        size="2em"
      />
      <StyledInput
        id="search-bar"
        type="text"
        onChange={props.onChange}
        {...props}
      />
    </StyledSearch>
  );
};

export default SearchBar;
