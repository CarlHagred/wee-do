import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

import AdminLayout from "../../components/admin/AdminLayout";
import { getAdminSession } from "../../api";
import hero from "../../components/images/AdminHeroBanner.png";
import RegisterPatientTest from "../../components/images/RegisterPatientButton";
import AdminTheme from "../../themes/AdminTheme";

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
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3em;
`;

const PanelMenu = styled.nav`
  display: flex;
  gap: 20px;
  list-style-type: none;
  margin-top: 20px;
`;

const PanelContainer = styled.div`
  height: 135px;
  width: 238px;
  background: ${(props) => props.theme.palette.brand};
  &:hover {
    background-color: ${(props) => props.theme.palette.hover};
  }
`;

const RegisterPatient = styled(PanelContainer)``;

const SearchPatient = styled(PanelContainer)``;

const RegisterExercise = styled(PanelContainer)``;

const SearchExercise = styled(PanelContainer)``;

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
      {/* <StyledHero />
      <StyledHeroHeader>Välkommen {admin.username}</StyledHeroHeader>*/}

      <RegisterPatientTest />
      <PanelMenu theme={AdminTheme}>
        <RegisterPatient />
        <SearchPatient />
        <RegisterExercise />
        <SearchExercise />
      </PanelMenu>
    </AdminLayout>
  );
};
export default AdminPanel;
