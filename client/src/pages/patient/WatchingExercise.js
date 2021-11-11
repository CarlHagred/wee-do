import React from "react";
import PatientLayout from "../../components/patient/PatientLayout";
import WatchingVideo from "../../components/patient/WatchingVideo";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  flex-direction: column; 
  text-align: center; 
`;

const WatchingExercise = () => {
    return (
    <PatientLayout>
      <StyledWrapper>
        <WatchingVideo />
      </StyledWrapper>
    </PatientLayout>
    );
}
 
export default WatchingExercise;