import React from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import AdminTheme from "../../themes/AdminTheme";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";




const Video = () => {
  const { name } = useParams();

  const generateQr = async () => {
  
  };
  
  const deleteVideo = () => {
    console.log("Hej");
  };

  return (
    <AdminLayout>
      <ThemeProvider theme={AdminTheme}>
        <h1>{name}</h1>
        <Button onClick={generateQr} icon="qrcode">Generera QR-kod</Button>
        <Button onClick={deleteVideo} icon="trash">Radera</Button>
      </ThemeProvider>
    </AdminLayout>
  );
};



export default Video;
