import React from "react";
import styled from "styled-components";

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
  @media (min-width: 415px) {
    margin: 0;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  width: 280px;
  padding-top: 10px;
  padding-bottom: 5px;
  :hover {
    text-decoration: underline;
  }
`;

const Text = styled.p`
  font-size: 0.9em;
`;

const CardContainer = styled.div``;

const Card = (props) => {
  return (
    <CardContainer className={props.className}>
      <ThumbnailContainer>
        <StyledThumbnail src={props.thumbnail} />
        <HoverContainer>
          <StyledHoverText>VISA</StyledHoverText>
        </HoverContainer>
      </ThumbnailContainer>
      <TextContainer>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
