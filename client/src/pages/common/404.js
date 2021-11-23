import React from "react";
import WdLogo from "../../components/images/WdLogo";
import styled from "styled-components";
import PatientTheme from "../../themes/PatientTheme";
import Button from "../../components/common/Button";

const StyledWdLogo = styled(WdLogo)`
  opacity: 0.2;
  width: 36%;
  display: flex;
`

const PageNotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  @media (max-width: 715px){
    margin-left: 30px;
    margin-right: 30px;
  }
`

const NotFoundButton = styled(Button)`
  background-color: darkgrey;
  :hover{
    background-color: grey;
  }
`

const StyledH1 = styled.h1`
  margin: 0;
  padding: 10px;
  font-size: 37px;
  @media (max-width: 497px){
    text-align: center;
  }
`

const StyledP = styled.p`
  font-size: 27px;
  padding-bottom: 10px;
  @media (max-width: 497px){
    text-align: center;
  }
`

const NotFound = () => {
    const goToPreviousPath = () => {
      window.history.back();
    }

  return (
    <>
      <PageNotFoundDiv>
        <StyledWdLogo></StyledWdLogo>
        <StyledH1>WeeDo hittade inte sidan</StyledH1>
        <StyledP>Det verkar som du har hittat en sida som inte finns...</StyledP>
        <NotFoundButton theme={PatientTheme} onClick={goToPreviousPath}>Tillbaka till förra sidan</NotFoundButton>
      </PageNotFoundDiv>
    </>
  );
};
export default NotFound;
