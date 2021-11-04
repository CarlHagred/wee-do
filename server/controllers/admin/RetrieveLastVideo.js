/**
 * Denna js fil hämtar ut info om den senaste inlagd övningen från 
 * Youtube och skickar den vidare till videos collection i weedos databas
 */
import Videos from '../../models/videos.js'; 
import {google} from 'googleapis'; 
import dotenv from 'dotenv'; 
import axios from 'axios'; 
dotenv.config(); 
 
const api_key = process.env.API_KEY;
const channel_Id = process.env.CHANNEL_ID; 
const url = process.env.FetchVidUrl; 
const postVideo = async () => {
   
   // let videoId, title, description, thumbnail;   
   try {
        const data =  await axios.get(url)
       // console.log(data.data); 
        for(let i in data.data.items){
            const video = new Videos({
                videoId : data.data.items[i].contentDetails.videoId,
                videoTitle: data.data.items[i].snippet.title,                 
                description: data.data.items[i].snippet.description, 
                thumbnail: data.data.items[i].snippet.thumbnails.high.url
            })
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
            console.log('Items '+i+ ' video id is: '+ data.data.items[i].contentDetails.videoId); 
        }
    } catch (error) {
    console.error(error)
    }

   
    /*const service = google.youtube('v3');
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
    });*/
}
export default postVideo; 