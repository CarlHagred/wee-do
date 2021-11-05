import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

import AdminLayout from "../../components/admin/AdminLayout";
import { getAdminSession } from "../../api";
import hero from "../../components/images/AdminHeroBanner.png";
import RegisterPatientTest from "../../components/images/RegisterPatientButton";

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

const RegisterPatient = styled.div``;

const SearchPatient = styled.div``;

const RegisterExercise = styled.div``;

const SearchExercise = styled.div``;

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
      <StyledHero />
      <StyledHeroHeader>Välkommen {admin.username}</StyledHeroHeader>

      <RegisterPatientTest />

      <RegisterPatient />
      <SearchPatient />
      <RegisterExercise />
      <SearchExercise />
    </AdminLayout>
  );
};
export default AdminPanel;
