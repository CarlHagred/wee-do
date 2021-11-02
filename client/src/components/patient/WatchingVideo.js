import React, { useState } from 'react';
import UserInput from '../common/UserInput';
import Button from '../common/Button';
import axios from 'axios';

const WatchExercise = () => {
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search);
  const title = params.get('title');
  console.log('title is: ' + title);
  const ytParams = '?rel=0&modestbranding=1';
  const vid = title + ytParams;

  //const [title, setTitle] = useState(null);
  //const [videoUrl, setVideoUrl] = useState(vid);
  /*const getInputValue = (event) => {
    setTitle(event.target.value);
  };
  const showExercise = () => {
    console.log('video input title: ' + title);
    axios
      .get('http://localhost:8000/getVideoUrl', { params: { titel: title } })
      .then((response) => {
        // Youtube video embeding controlling parameters
        const ytParams = '?rel=0&modestbranding=1';
        setVideoUrl(response.data + ytParams);
        console.log('video url: ' + videoUrl);
        //const videoUrl = getVideoUrl(title);
      });
  };
          //
        <UserInput onChange={getInputValue} placeholder="Övningstitel" />
<Button onClick={showExercise}>Spela övning</Button>
  
  */

  return (
    <div>
      <div className="titleInput">
        <iframe src={vid} width="420" height="315" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default WatchExercise;
