import React from "react";
import styled from "styled-components";

import WdLogo from "../images/WdLogo";
import RsLogoSolid from "../images/RsLogoSolid";
import MauLogo from "../images/MauLogo";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: ${(props) => props.theme.palette.brand};
    padding: 20px;
    color: white;
`;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 280px;
`;

const StyledParagraph = styled.p`
    font-style: italic;
    padding: 5px 0 10px 5px;
`;

const LogoContainer = styled.div`
    margin: 10px;
`;

const NavMenu = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3em;
    margin-top: 45px;
    margin-right: 20px;
    @media (min-width: 768px) {
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

const NavItem = styled.p`
    margin-top: 5px;
    padding: 3px 0;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <AboutContainer>
                <WdLogo
                    width="128px"
                    height="45px"
                    fill="white"
                    alt="WeeDo logotyp"
                />
                <StyledParagraph>
                    WeeDo är ett samarbete mellan sjukgymnaster på Region Skåne
                    och studenter på Malmö Universitet.
                </StyledParagraph>
                <LogoContainer>
                    <RsLogoSolid
                        width="52px"
                        height="45px"
                        fill="white"
                        alt="Region Skåne logotyp"
                    />
                    <MauLogo
                        width="52px"
                        height="45px"
                        fill="white"
                        alt="Malmö Universitets logotyp"
                    />
                </LogoContainer>
            </AboutContainer>
            <NavMenu last="true">
                <NavContainer>
                    <NavHeader>Övning</NavHeader>
                    <NavItem>Scanna Qr-kod</NavItem>
                    <NavItem>Se statistik</NavItem>
                </NavContainer>
                <NavContainer>
                    <NavHeader>Information</NavHeader>
                    <NavItem>Hjälp</NavItem>
                    <NavItem>Om WeeDo</NavItem>
                </NavContainer>
            </NavMenu>
        </StyledFooter>
    );
};

export default Footer;
