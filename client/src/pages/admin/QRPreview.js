import React from 'react';
import QRCreator from '../../components/admin/QRCreator';

const QRPreview = () => {

  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search);
  const text = params.get('text');
  const link = params.get('link');
  const image = params.get('image');
  
  return (
    <>
      <QRCreator text={text} link={link} image={image} />
    </>
  );
};

export default QRPreview;
