import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHelp = styled(NavLink)`
  margin: 30px 0;
  font-size: 0.9em;
`;

const HelpLink = () => {
  return <StyledHelp to="/help">Hjälp</StyledHelp>;
};

export default HelpLink;
