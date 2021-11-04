/**
 * Denna js fil hämtar ut upp till 25 filmer som finns på spellistan weedo i weedo youtube kanal 
 * och skickar dem vidare till videos collection i weedos databas. Databasen uppdateras med endast
 * de filmer som inte finns redan och är nya. 
 */
import Videos from '../../models/videos.js'; 
import dotenv from 'dotenv'; 
import axios from 'axios'; 
dotenv.config(); 
 
const url = process.env.FetchVidUrl; 
const postVideo = async () => {
   
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
                }
            });
        }
    } catch (error) {
    console.error(error)
    }
}
export default postVideo; 