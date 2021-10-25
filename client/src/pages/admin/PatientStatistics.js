import React from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";

const PatientStatistics = () => {
  const { name } = useParams();

  return (
    <AdminLayout>
      <h2>Statistik</h2>

      <p>Test för stats: namn {name}</p>
    </AdminLayout>
  );
};
export default PatientStatistics;
