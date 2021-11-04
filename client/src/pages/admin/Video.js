
import { useParams } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import AdminTheme from "../../themes/AdminTheme";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import { getAllVideos } from "../../api";
import React, { useState, useEffect } from "react";



const StyledTitle = styled.p`
  font-weight: bold;
`;



const Video = () => {
  const { videoId } = useParams();

  const [videos, setVideos] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const allVideos = await getAllVideos();
      setVideos(allVideos.data);
    };
    fetchData();
  }, [videos]);


  const generateQr = async () => {
    window.location.href = `/admin/exercise/qrpreview?text=${videos.videoTitle}&link=www.youtube.com&image=hej`;
  };
  
  const deleteVideo = () => {
    console.log("Hej");
  };

  const videoUrl = 'https://www.youtube.com/embed/'+videoId;

  return (
    <AdminLayout>
      <ThemeProvider theme={AdminTheme}>
      <br></br>
      <p>
       
        {videos
          .filter((videos) => {
            return videos.videoId.includes(videoId) ? videos : null;
          })
          .map((videos) => (
            
            <StyledTitle>
                  <p align="center">
                    {videos.videoTitle}
                  </p>
                  </StyledTitle>
                
          ))}
          <br></br>
          <br></br>
          <br></br>
      </p>

      <p align="center"><iframe width="560" height="315" src={videoUrl} frameborder="0" allowfullscreen></iframe></p>

        <Button onClick={generateQr} icon="qrcode">Generera QR-kod</Button>
      
        <Button onClick={deleteVideo} icon="trash">Radera</Button>

        
      </ThemeProvider>
    </AdminLayout>
  );
};



export default Video;







