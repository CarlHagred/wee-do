import styled from "styled-components";

const StyledFlexboxParent = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  align-items: baseline;
  flex-wrap: wrap;
`;

const StyledFlexbox = styled(StyledFlexboxParent)`
  margin: 1em;
`;

const StyledCardFlexbox = styled(StyledFlexboxParent)`
  align-items: center;
  justify-content: space-evenly;
`;

const CardFlexContainer = styled(StyledFlexboxParent)`
  width: 210mm;
  height: 258mm;
`;

const CardHalfContainer = styled(StyledFlexboxParent)`
  height: 141mm;
  justify-content: space-evenly;
`;

const CardItem = styled.div`
  margin: 2em;
`;

const FlexItem = styled.div`
  margin-left: 0.5em;
  margin-right: 0.5em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-top: 0.5em;

  :hover {
    filter: brightness(130%);
    background-color: ${(props) => props.theme.palette.hover};
  }
`;

export const StyledCardHalfContainer = (props) => {
  return (
    <>
      <CardHalfContainer {...props} />
    </>
  );
};

export const StyledCardItem = (props) => {
  return (
    <>
      <CardItem {...props} />
    </>
  );
};

export const StyledCardFlexContainer = (props) => {
  return (
    <>
      <CardFlexContainer {...props} />
    </>
  );
};

export const VideoItem = (props) => {
  return (
    <>
      <FlexItem {...props} />
    </>
  );
};

export const QrFlexbox = (props) => {
  return (
    <>
      <StyledCardFlexbox {...props} />
    </>
  );
};

export const Flexbox = (props) => {
  return (
    <>
      <StyledFlexbox {...props} />
    </>
  );
};

export default Flexbox +
  QrFlexbox +
  VideoItem +
  StyledCardHalfContainer +
  StyledCardItem +
  StyledCardFlexContainer;
