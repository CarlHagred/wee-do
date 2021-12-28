import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const VideoContainer = styled.div`
  padding-bottom: 1.5em;
`;

const StyledThumbnail = styled.img`
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
`;

const HoverContainer = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;

const StyledHoverText = styled.div`
  font-size: 32px;
  padding: 16px 32px;
  color: white;
`;

const ThumbnailContainer = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.9);
  :hover ${StyledThumbnail} {
    opacity: 0.3;
  }
  :hover ${HoverContainer} {
    opacity: 1;
  }
`;

const TextContainer = styled.div`
  margin: 0 3%;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

const StyledVideoTitle = styled.h1`
  font-weight: bold;
  width: 280px;
  padding-top: 10px;
  padding-bottom: 5px;
  :hover {
    text-decoration: underline;
  }
`;

const StyledVideoText = styled.p`
  font-size: 0.9em;
`;

const Card = (props) => {
  return (
    <Link to={props.link}>
      <VideoContainer>
        <ThumbnailContainer>
          <StyledThumbnail src={props.thumbnail} />
          <HoverContainer>
            <StyledHoverText>VISA</StyledHoverText>
          </HoverContainer>
        </ThumbnailContainer>
        <TextContainer>
          <StyledVideoTitle>{props.title}</StyledVideoTitle>
          <StyledVideoText>
            Du har gjort övningen: {props.text} gånger
          </StyledVideoText>
        </TextContainer>
      </VideoContainer>
    </Link>
  );
};

export default Card;
