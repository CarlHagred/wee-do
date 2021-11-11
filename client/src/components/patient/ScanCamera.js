import React from "react";
import QrReader from "react-web-qr-reader";
import { getVideoUrl } from "../../api/index";

const ScanCamera = () => {
    const previewStyle = {
        height: 240,
        width: 320,
    };

    const handleScan = async (result) => {
        const params = {
            id: result.data,
        };

        const videoUrl = await getVideoUrl(params);

        if (videoUrl.data !== "http://www.youtube.com/embed/404") {
            window.location.href = `watch?title=${videoUrl.data}`;
        }
    };

    const handleError = (error) => {
        alert(`The code could not be scanned. Error: ${error}`);
    };

    return (
        <>
            <QrReader
                style={previewStyle}
                onError={handleError}
                onScan={handleScan}
            />
        </>
    );
};

export default ScanCamera;
