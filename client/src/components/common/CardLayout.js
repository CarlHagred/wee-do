import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  font-size: 2em;
  padding-top: 1em;
  font-weight: 600;
  text-align: center;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 1em auto;
  gap: 0.5em;
  @media (min-width: 415px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 1em 5em;
  }
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 1em 5em;
  }
  @media (min-width: 930px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 1em 5em;
  }
`;

const CardLayout = (props) => {
  return (
    <>
      <StyledHeader>{props.header}</StyledHeader>

      <CardWrapper>{props.children}</CardWrapper>
    </>
  );
};

export default CardLayout;
