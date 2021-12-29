import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 1em auto;
  gap: 2em 1em;
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

const CardLayout = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default CardLayout;
