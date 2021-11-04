
import { useParams } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import AdminTheme from "../../themes/AdminTheme";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import { getAllVideos } from "../../api";
import React, { useState, useEffect } from "react";

const StyledTable = styled.table`
  caption-side: top;
  border-collapse: separate;
  border-spacing: 5px;
  width: 100%;
  margin: 1em 0;
  justify-content: left;
  border-radius: 4px;

  td,
  th {
    padding: 5px 10px;
    border-radius: 4px;
    font-family: "Roboto", sans-serif;
    font-size: 1em;
    text-align: left;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: rgb(247, 247, 248, 100%);
    }
    :nth-of-type(even) {
      background-color: rgb(247, 247, 248, 100%);
    }
    
  }
  thead td {
    background-color: #c2c2c2;
    border-radius: 4px;
    font-size: 1.2em;
  }
`;


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
    window.location.href = `/admin/exercise/qrpreview?text=${videoId}&link=www.youtube.com&image=hej`;
  };
  
  const deleteVideo = () => {
    console.log("Hej");
  };


  return (
    <AdminLayout>
      <ThemeProvider theme={AdminTheme}>

      <StyledTable>
        <colgroup>
          <col />
          <col />
        </colgroup>
      
        {videos
          .filter((videos) => {
            return videos.videoId.includes(videoId) ? videos : null;
          })
          .map((videos) => (
            <tbody>
              
              
              <tr>
                <td>
                  <StyledTitle>
                  
                    {videos.videoTitle}
                  
                  </StyledTitle>
                
                  <br></br>
                  <img src={videos.thumbnail} alt="profile pic" width="250px" height="200px" />
                  <br></br>
                  <br></br>
                  Antal visningar: {videos.__v}
                </td>
              </tr>
              <br></br>
              <br></br>
              <br></br>
              
            </tbody>
          ))}
      </StyledTable>

      
        <Button onClick={generateQr} icon="qrcode">Generera QR-kod</Button>
      
        <Button onClick={deleteVideo} icon="trash">Radera</Button>
      </ThemeProvider>
    </AdminLayout>
  );
};



export default Video;







