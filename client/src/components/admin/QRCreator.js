import React from 'react';
import QRCode from 'react-qr-code';

const QRCreator = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
      <img src={props.image} alt={props.image} width="40%" />
      <QRCode value={props.link} />
    </>
  );
};

export default QRCreator;
