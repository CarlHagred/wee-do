import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  font-size: 3em;
  color: #007ab3;
  margin-bottom: 0.5em;
`;

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
