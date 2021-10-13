import React, { useState } from 'react';
import { Link, useHistory, Prompt } from 'react-router-dom';
import QrReader from 'react-web-qr-reader';

const ScanQr = () => {
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
      <ul>
        <Link to="/">Tillbaka</Link>
      </ul>
      <h1>Scanna</h1>
      <QrReader
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>Skane image</p>
    </div>
  );
};

export default ScanQr;
