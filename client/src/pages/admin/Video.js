import React from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";

const Video = () => {
  const { name } = useParams();

  return (
    <AdminLayout>
      <h2>Vald video</h2>

      <p>Test för vald video: namn {name}</p>
    </AdminLayout>
  );
};
export default Video;
