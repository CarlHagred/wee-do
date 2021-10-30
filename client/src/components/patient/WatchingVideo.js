import UserInput from '../common/UserInput';
import Button from '../common/Button';
import { getVideoUrl } from "../../api/index";

const getInputValue = (event) =>{
    const input = event.target.value; 
    return input; 
}
const showExercise = (event) => {
    event.preventDefault(); 
    const title = getInputValue(event);
    console.log ("video input title: "+title) 
    const videoUrl = getVideoUrl(title);
    return (
         <div className="watchingExe">
             <iframe src={videoUrl} frameborder="0" className="youtubePlayer" width="420" height="315" allowFullScreen></iframe>
        </div>
    ); 
}
const WatchExercise = () => {
    return (
       <div>
           <div className="titleInput">
                <UserInput onChange={getInputValue} placeholder="Övningstitel"/>
                <Button onClick={showExercise}>Spela övning</Button>
           </div>
       </div>
    );
}
 
export default WatchExercise;