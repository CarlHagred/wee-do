import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  margin: 2em 1em;
  @media (min-width: 415px) {
    margin: 3em 5em;
  }
`;

const TopWrapper = (props) => {
  return (
    <Wrapper>
      <Header>{props.header}</Header>
      {props.children}
    </Wrapper>
  );
};

export default TopWrapper;
