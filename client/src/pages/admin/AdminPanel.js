import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

import AdminLayout from "../../components/admin/AdminLayout";
import { getAdminSession } from "../../api";
import hero from "../../components/images/AdminHeroBanner.png";
import RegisterPatientTest from "../../components/images/RegisterPatientButton";

const StyledHero = styled.div`
  margin: -1rem -1rem 2rem -1rem;
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
      <StyledHero>
        <img src={hero} alt="Activity Banner" width="100%" />
      </StyledHero>

      <h2 style={{ textAlign: "center" }}>Vällkommen {admin.username}</h2>
      <br />
      <RegisterPatientTest />

      <RegisterPatient />
      <SearchPatient />
      <RegisterExercise />
      <SearchExercise />
    </AdminLayout>
  );
};
export default AdminPanel;
