import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  font-size: 3em;
  color: ${(props) => props.theme.palette.header};
  margin-bottom: 0.4em;
`;

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
