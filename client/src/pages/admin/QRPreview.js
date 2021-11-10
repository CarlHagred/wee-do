import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getAllVideos } from "../../api";

import QRCreator from "../../components/admin/QRCreator";

const QRPreview = () => {
    const { id } = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const allVideos = await getAllVideos();
            setVideos(allVideos.data.find((x) => x.videoId === id));
        };
        fetchData();
    }, [videos, id]);

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
