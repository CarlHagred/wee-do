import React from 'react';
import { useHistory } from 'react-router-dom';
import QrReader from 'react-web-qr-reader';
import { getVideoUrl } from '../../api/index';

const ScanCamera = () => {
  const history = useHistory();

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const handleScan = async (result) => {
    const params = {
      qr: result.data,
    };

    const videoUrl = await getVideoUrl(params);

    alert(videoUrl.data);
    //Nedanstående if ska kolla om länken är gilltig och i så fall skicka till videospelaren med länken
    if (result.toString) {
      history.push('/');
    }
  };

  const handleError = (error) => {
    alert(`The code could not be scanned. Error: ${error}`);
  };

  return (
    <div>
      <QrReader
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
    </div>
  );
};

export default ScanCamera;
