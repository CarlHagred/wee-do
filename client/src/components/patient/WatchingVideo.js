import React from 'react';

const WatchExercise = () => {
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search);
  const title = params.get('title');
  console.log('title is: ' + title);
  const ytParams = '?rel=0&modestbranding=1';
  const vid = title + ytParams;

  return (
    <div>
      <div className="titleInput">
        <iframe src={vid} width="420" height="315" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default WatchExercise;
