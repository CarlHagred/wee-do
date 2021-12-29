import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  font-size: 2em;
  font-weight: 600;
`;

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
