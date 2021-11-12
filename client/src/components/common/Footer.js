import React from "react";
import styled from "styled-components";

import WdLogo from "../images/WdLogo";
import RsLogoSolid from "../images/RsLogoSolid";
import MauLogo from "../images/MauLogo";

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
    max-width: 280px;
`;

const StyledParagraph = styled.p`
    font-style: italic;
    padding: 5px 0 10px 5px;
`;

const LogoContainer = styled.div``;

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

const NavItem = styled.p`
    margin-top: 5px;
    padding: 3px 0;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <TopContainer>
                <WdLogo
                    width="128px"
                    height="45px"
                    fill="white"
                    alt="WeeDo logotyp"
                />
            </TopContainer>

            <BotttomContainer>
                <AboutContainer>
                    <StyledParagraph>
                        WeeDo är ett samarbete mellan sjukgymnaster på Region
                        Skåne och studenter på Malmö Universitet.
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
                        <NavHeader>Information</NavHeader>
                        <NavItem>Hjälp</NavItem>
                        <NavItem>Om WeeDo</NavItem>
                    </NavContainer>
                </NavMenu>
            </BotttomContainer>
        </StyledFooter>
    );
};

export default Footer;
