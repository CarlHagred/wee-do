import React, {useState} from 'react';
import UserInput from '../common/UserInput';
import Button from '../common/Button';
import { getVideoUrl } from "../../api/index";
import axios from 'axios';

const WatchExercise = () => {
    const [title, setTitle] = useState(null);
    const [videoUrl, setVideoUrl] = useState("");  
    const getInputValue = (event) =>{
        setTitle(event.target.value);  
    }
    const showExercise = () => {
        console.log ("video input title: "+title) 
        axios.get('http://localhost:8000/getVideoUrl', {params: {titel: title}}).then(response => {
            setVideoUrl(response.data); 
            console.log('video url: '+ videoUrl); 
            //const videoUrl = getVideoUrl(title);
        });  
    }
    const renderVideo = () =>{
    
        return <div className="watchingExe">     
             <iframe src={videoUrl} frameborder="0" className="youtubePlayer" width="420" height="315" allowFullScreen></iframe>
        </div>
    } 
    return (
       <div>
           <div className="titleInput">
                <UserInput onChange={getInputValue} placeholder="Övningstitel"/>
                <Button onClick={showExercise}>Spela övning</Button>
                <iframe src={videoUrl} width="420" height="315" allowFullScreen></iframe>
           </div>
       </div>
    );
}
 
export default WatchExercise;