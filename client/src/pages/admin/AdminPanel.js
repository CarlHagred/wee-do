import React from "react";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { getAdminSession } from "../../api";

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
      <h2 style={{ textAlign: "center" }}>Vällkommen {admin.username}</h2>
      <br />
    </AdminLayout>
  );
};
export default AdminPanel;
