import React from 'react';
import { useHistory } from 'react-router-dom';
import QrReader from 'react-web-qr-reader';
import { getVideoUrl } from '../../api/index';

const ScanCamera = () => {
  //const history = useHistory();

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const handleScan = async (result) => {
    const params = {
      titel: result.data,
    };
    //const ytParams = '?rel=0&modestbranding=1';

    const videoUrl = await getVideoUrl(params);

    if (videoUrl.data != 'http://www.youtube.com/embed/404') {
      //alert(videoUrl.data);
      //window.location = '/watch';
      console.log(videoUrl.data);
      window.location.href = `watch?title=${videoUrl.data}`;
    }

    //console.log(videoUrl);

    //Nedanstående if ska kolla om länken är gilltig och i så fall skicka till videospelaren med länken
    /*if (result.toString) {
      history.push('/');
    }*/
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
