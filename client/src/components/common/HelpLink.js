import React from "react";
import styled from "styled-components";

const StyledHelp = styled.a`
  margin-top: 30px;
  margin-bottom: 0px;
`;

const HelpLink = (props) => {
  return (
    <StyledHelp>
      <a href="/#/help">Hjälp</a>
    </StyledHelp>
  );
};

export default HelpLink;
