import { useParams } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import AdminTheme from "../../themes/AdminTheme";
import styled, { ThemeProvider } from "styled-components";
import Button from "../../components/common/Button";
import { deleteVideoIndex, getAllVideos } from "../../api";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


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


    const handleEvent = () => {
      const id = videoId;
      console.log(id);
      deleteVideoIndex(id);

      /*axios.delete('http://localhost:8000/detetevideo', {
        body: {
        VideoId: videos.videoId
        }
      });
      console.log(videoId);
      deleteVideoIndex(videoId);*/
    };

    const videoUrl = "https://www.youtube.com/embed/" + videoId;

    return (
        <AdminLayout>
            <ThemeProvider theme={AdminTheme}>
                <br></br>
                <p>
                    {videos
                        .filter((videos) => {
                            return videos.videoId.includes(videoId)
                                ? videos
                                : null;
                        })
                        .map((videos) => (
                            <StyledTitle>
                                <p align="center">{videos.videoTitle}</p>
                            </StyledTitle>
                        ))}
                    <br></br>
                    <br></br>
                    <br></br>
                </p>

                <p align="center">
                    <iframe
                        width="560"
                        height="315"
                        src={videoUrl}
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                </p>
                <br></br>
                <Link to={`/admin/exercise/qrpreview/${videoId}`}>
                    <Button icon="qrcode">Generera QR-kod</Button>
                </Link>
                <br></br>
                <Button onClick={handleEvent} icon="trash">
                    Radera
                </Button>
            </ThemeProvider>
        </AdminLayout>
    );
};

export default Video;
