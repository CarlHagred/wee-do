import React from 'react';
import { useHistory } from 'react-router-dom';
import QrReader from 'react-web-qr-reader';

const ScanCamera = () => {
  const history = useHistory();

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const handleScan = (result) => {
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
