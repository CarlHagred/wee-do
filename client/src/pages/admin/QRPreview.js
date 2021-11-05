import React, { useState, useEffect } from "react";
import QRCreator from "../../components/admin/QRCreator";
import { getAllVideos } from "../../api";
import { useParams } from "react-router-dom";

const QRPreview = () => {
    const { id } = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const allVideos = await getAllVideos();
            setVideos(allVideos.data.find((x) => x.videoId === id));
        };
        fetchData();
    }, [videos]);

    return (
        <>
            <QRCreator
                text={videos.videoTitle}
                id={id}
                image={videos.thumbnail}
            />
        </>
    );
};

export default QRPreview;
