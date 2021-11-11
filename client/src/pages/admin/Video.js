import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getAllVideos } from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import Button from "../../components/common/Button";

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

    const deleteVideo = () => {
        console.log("Hej");
    };

    const videoUrl = "https://www.youtube.com/embed/" + videoId;

    return (
        <AdminLayout>
            <br></br>
            <p>
                {videos
                    .filter((videos) => {
                        return videos.videoId.includes(videoId) ? videos : null;
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
                    title={videoUrl}
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
            <Button onClick={deleteVideo} icon="trash">
                Radera
            </Button>
        </AdminLayout>
    );
};

export default Video;
