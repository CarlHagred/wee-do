import React from "react";
import Button from "../../components/common/Button";
import PlaceHolder from "../../components/common/PlaceHolder";
import AdminLayout from "../../components/admin/AdminLayout";

const AdminLogin = () => {
  return (
    <AdminLayout>
      <PlaceHolder />

      <h2>Logga in - Admin</h2>
      <br />
      <Button>Logga in som admin</Button>
    </AdminLayout>
  );
};
export default AdminLogin;
