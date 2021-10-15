import React from "react";

// libaries
import { IoMdSearch } from "react-icons/io";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <StyledSearch>
      <IoMdSearch
        style={{ marginLeft: "0.5rem", position: "absolute" }}
        color="#707070"
        size="2em"
      />
      <StyledInput id="search-bar" type="text" placeholder="Sök.." />
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  box-sizing: border-box;

  border: 2px solid #ccc;
  border-radius: 4px;

  font-size: 16px;
  background-color: white;

  margin-bottom: 20px; ;
`;

const StyledInput = styled.input`
  padding: 8px 0px 8px 50px;
  width: 100%;
`;

export default SearchBar;
