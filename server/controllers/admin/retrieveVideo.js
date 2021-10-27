import Videos from '../../models/videos.js'; 
import {google} from 'googleapis'; 
import dotenv from 'dotenv'; 
dotenv.config(); 
const api_key = process.env.API_KEY; 
const channel_id = process.env.CHANNEL_ID; 
const postVideo = () => {
   
    var videoId, title, description, thumbnail; 

    var service = google.youtube('v3');
    service.search.list({
        key: 'AIzaSyCCp8P3NT_n7Vmi99R8bH3MzsIjymKiSjc', 
        channelId: 'UCq2AVCxH9FGBY2TyPQQAs_g', 
        order: 'date',
        part: 'snippet',
        maxResults: 1, 
    }).then((response) =>{
        const {data} = response;
       // console.log(data); rätt data fetchas
         
        data.items.forEach(element => {
           
            videoId = element.id.videoId; 
            title = element.snippet.title; 
            description = element.snippet.description; 
            thumbnail = element.snippet.thumbnails.high.url;
            //Testar i consoleloga
           /* console.log('videoId: '+ videoId +' title: ' + title 
            + ' description: ' + description + ' High quality thumb: ' + thumbnail);*/
        }); 
        const video = new Videos({
            övningsId : videoId,
            övningsTitel: title,                 
            övningsBeskrivning: description, 
            övningsOmslag: thumbnail
        }); 

         Videos.findOne({övningsId: video.övningsId}, function(err, existingVideo){
            if(existingVideo == null){
               video.save();
               console.log('Övning skickades till db')  
            }
            else
            {
                console.log('Övningen finns redan på db')
            }
        });
    });
}
export default postVideo; 