import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import AdminLayout from "../../components/admin/AdminLayout";
import { getAdminSession } from "../../api";
import hero from "../../components/images/AdminHeroBanner.png";
import AdminTheme from "../../themes/AdminTheme";
import Icon from "../../components/common/Icons";

const StyledHero = styled.div`
  margin: -1rem -1rem 2rem -1rem;
  width: 100vw;
  height: 40vh;
  background-image: url(${hero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const StyledHeroHeader = styled.h1`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3em;
`;

const PanelMenu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style-type: none;
  margin-top: 20px;
  justify-content: center;
`;

const PanelContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  min-height: 135px;
  min-width: 238px;
  background: ${(props) => props.theme.palette.brand};
  &:hover {
    background-color: ${(props) => props.theme.palette.hover};
  }
`;

const RegisterPatient = styled(PanelContainer)``;

const SearchPatient = styled(PanelContainer)``;

const RegisterExercise = styled(PanelContainer)``;

const SearchExercise = styled(PanelContainer)``;

const StyledPanelText = styled.p`
  align-self: flex-start;
  color: white;
  font-size: 1.3em;
  margin-left: 20px;
`;

const StyledPanelIcon = styled(Icon)`
  align-self: flex-end;
  color: white;
  font-size: 1.3em;
  margin: 20px 20px 10px 0;
`;

const AdminPanel = () => {
  const [admin, setAdmin] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const fetchedAdminSession = await getAdminSession();
      setAdmin(fetchedAdminSession.data);
    };
    fetchData();
  });
  return (
    <AdminLayout>
      <StyledHero>
        <StyledHeroHeader>Välkommen {admin.username}</StyledHeroHeader>
      </StyledHero>

      <PanelMenu theme={AdminTheme}>
        <RegisterPatient to="/admin/register/patient">
          <StyledPanelIcon name="add_user" size="3em" fill="white" />
          <StyledPanelText>Registrera patient</StyledPanelText>
        </RegisterPatient>

        <SearchPatient to="/admin/search/patient">
          <StyledPanelIcon
            name="search_patient"
            width="62"
            height="62"
            fill="white"
          />
          <StyledPanelText>Sök patient</StyledPanelText>
        </SearchPatient>

        <RegisterExercise to="/admin/register/exercise">
          <StyledPanelIcon name="upload" size="3em" fill="white" />
          <StyledPanelText>Ladda upp övning</StyledPanelText>
        </RegisterExercise>

        <SearchExercise to="/admin/search/exercise">
          <StyledPanelIcon
            name="search_exercise"
            width="62"
            height="62"
            fill="white"
          />
          <StyledPanelText>Sök övning</StyledPanelText>
        </SearchExercise>
      </PanelMenu>
    </AdminLayout>
  );
};
export default AdminPanel;
