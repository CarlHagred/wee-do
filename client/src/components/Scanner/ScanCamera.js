import React, { useState } from 'react';
import { useHistory, Prompt } from 'react-router-dom';
import QrReader from 'react-web-qr-reader';

const ScanCamera = () => {
  const history = useHistory();

  const [failedScan, setFailedScan] = useState(false);

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const handleScan = (result) => {
    setFailedScan(true);
    if (result.toString) {
      history.push('/');
    }
  };

  const handleError = (error) => {
    setFailedScan(true);
  };

  return (
    <div>
      <Prompt when={failedScan} message={() => `Något gick fel`} />
      <QrReader
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
    </div>
  );
};

export default ScanCamera;
