import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background: ${(props) => props.theme.palette.brand};
  color: white;

  padding: 20px;

  @media (min-width: 768px) {
    padding: 20px 40px;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

const StyledParagraph = styled.p`
  font-style: italic;
  padding: 5px 0 10px 5px;
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3em;
  @media (min-width: 550px) {
    ${(p) => p.last && `margin-left: auto`};
  }
`;

const NavContainer = styled.div`
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
      <FooterContainer>
        <AboutContainer>
          <StyledParagraph>
            WeeDo är utvecklat av studenter vid Malmö Universitet i samarbete
            med sjukgymnaster från Mobilt Sjukhus Team.
          </StyledParagraph>
        </AboutContainer>
        <NavMenu last="true">
          <NavContainer>
            <NavHeader>Information</NavHeader>

            <NavItem to="/help">Hjälp</NavItem>
            <NavItem to="/about">Om WeeDo</NavItem>
          </NavContainer>
        </NavMenu>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
