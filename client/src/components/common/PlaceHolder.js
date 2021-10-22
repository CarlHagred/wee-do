import styled from "styled-components";

const StyledWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const PlaceHolder = () => {
  return (
    <StyledWrapper>
      <img src="http://placebeer.com/400/200" alt="Placeholder" width="100%" />
    </StyledWrapper>
  );
};

export default PlaceHolder;
