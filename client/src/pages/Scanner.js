import React from 'react';
import { Link } from 'react-router-dom';
import ScanCamera from '../components/Scanner/ScanCamera';

const ScanQr = () => {
  return (
    <div>
      <ul>
        <Link to="/">Tillbaka</Link>
      </ul>
      <h1>Scanna</h1>
      <ScanCamera />
      <p>Skane image</p>
    </div>
  );
};

export default ScanQr;
