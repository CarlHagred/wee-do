import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import WdLogo from "../images/WdLogo";

const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background: ${(props) => props.theme.palette.brand};
  color: white;

  padding: 20px;

  @media (min-width: 768px) {
    padding: 20px 80px 30px 80px;
  }
`;

const TopContainer = styled.div`
  flex: 1;
`;

const BotttomContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  @media (min-width: 400px) {
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
`;

const StyledParagraph = styled.p`
  font-style: italic;
  padding: 5px 0 10px 5px;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3em;
  @media (min-width: 550px) {
    ${(p) => p.last && `margin-left: auto`};
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavHeader = styled.h1`
  font-weight: bold;
  font-size: 1.1em;
`;

const NavItem = styled(NavLink)`
  margin-top: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <TopContainer>
        <WdLogo width="128px" height="45px" fill="white" alt="WeeDo logotyp" />
      </TopContainer>

      <BotttomContainer>
        <AboutContainer>
          <StyledParagraph>
            WeeDo är ett samarbete mellan sjukgymnaster på Mobilt Sjukhus Team
            och studenter på Malmö Universitet.
          </StyledParagraph>
        </AboutContainer>
        <NavContainer last="true">
          <NavMenu>
            <NavHeader>Information</NavHeader>

            <NavItem to="/help">Hjälp</NavItem>
            <NavItem to="/about">Om WeeDo</NavItem>
          </NavMenu>
        </NavContainer>
      </BotttomContainer>
    </StyledFooter>
  );
};

export default Footer;
