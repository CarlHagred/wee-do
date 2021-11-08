/**
 * Denna js fil hämtar ut info om den senaste inlagd övningen från 
 * Youtube och skickar den vidare till videos collection i weedos databas
 */
import Videos from '../../models/videos.js'; 
import {google} from 'googleapis'; 
import dotenv from 'dotenv'; 
dotenv.config(); 
 
const api_key = process.env.API_KEY;
const channel_Id = process.env.CHANNEL_ID; 

const postVideo = () => {
    let videoId, title, description, thumbnail; 

    const service = google.youtube('v3');
    service.search.list({
        key: api_key, 
        channelId: channel_Id, 
        order: 'date',
        part: 'snippet',
        maxResults: 1, 
    }).then((response) =>{
        const {data} = response;
         
        data.items.forEach(element => {
           
            videoId = element.id.videoId; 
            title = element.snippet.title; 
            description = element.snippet.description; 
            thumbnail = element.snippet.thumbnails.high.url;
        }); 
        const video = new Videos({
            videoId : videoId,
            videoTitle: title,                 
            description: description, 
            thumbnail: thumbnail
        }); 

         Videos.findOne({videoId: video.videoId}, function(err, existingVideo){
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