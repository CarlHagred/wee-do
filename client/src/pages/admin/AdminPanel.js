import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { getAdminSession } from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import PanelButton from "../../components/common/PanelButton";
import hero from "../../components/images/AdminHeroBanner.png";

const StyledHero = styled.div`
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

const PanelMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PanelMenu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
  justify-content: center;
`;

const AdminPanel = () => {
  const [admin, setAdmin] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const fetchedAdminSession = await getAdminSession();
      setAdmin(fetchedAdminSession.data);
    };
    fetchData();
  }, []);
  return (
    <AdminLayout>
      <StyledHero>
        <StyledHeroHeader>Välkommen {admin.username}</StyledHeroHeader>
      </StyledHero>

      <PanelMenuWrapper>
        <PanelMenu>
          <PanelButton to="/admin/register/patient" icon="add_user" size="3em">
            Registrera patient
          </PanelButton>
          <PanelButton
            to="/admin/search/patient"
            icon="search_patient"
            width="62"
            height="62"
          >
            Sök patient
          </PanelButton>
          <PanelButton to="/admin/register/exercise" icon="upload" size="3em">
            Ladda upp övning
          </PanelButton>
          <PanelButton
            to="/admin/search/exercise"
            icon="search_exercise"
            width="62"
            height="62"
          >
            Sök övning
          </PanelButton>
        </PanelMenu>
      </PanelMenuWrapper>
    </AdminLayout>
  );
};
export default AdminPanel;
