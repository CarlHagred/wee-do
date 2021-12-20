import PatientLayout from "../../components/patient/PatientLayout";
import styled from "styled-components";
import IconExerciseList from "../../components/images/IconExerciseList";
import { ImQrcode } from "react-icons/im";
import { NavLink } from "react-router-dom";

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 3em auto 0 auto;
  justify-content: center;
`;

const StyledHeader = styled.h1`
  font-size: 2.5em;
  padding-bottom: 1em;
  font-weight: 600;
  text-align: center;
`;

const NavContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.palette.brand};
  border-radius: 2em;
  position: relative;
  padding: 1.2em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    border-style: solid;
    background-color: ${(props) => props.theme.palette.hover};
  }
`;

const IconsWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 4em;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 160px;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.div`
  font-size: 1.5em;
  color: white;
`;

const ToDo = () => {
  return (
    <PatientLayout>
      <StyledContentContainer>
        <StyledHeader>Mina övningar</StyledHeader>
        <IconsWrapper>
          <NavContainer to="/exerciselist">
            <IconContainer>
              <IconExerciseList width="120px" height="150px" fill="white" />
            </IconContainer>
            <StyledText>Visa alla övningar</StyledText>
          </NavContainer>
          <NavContainer to="/QrScanner">
            <IconContainer>
              <ImQrcode size="100px" fill="white" />
            </IconContainer>
            <StyledText>Scanna övning</StyledText>
          </NavContainer>
        </IconsWrapper>
      </StyledContentContainer>
    </PatientLayout>
  );
};

export default ToDo;
