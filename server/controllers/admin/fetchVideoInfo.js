import Videos from '../../models/videos.js'; 
import {google} from 'googleapis'; 

const postVideo = () => {
    /*const [videoId, title, description, thumbnail] = 
    [
        element.id.videoId, element.snippet.title, 
        element.snippet.description, element.snippet.thumbnails.high.url
    ]; */

    var videoId, title, description, thumbnail; 

    /*const [videoId, setVideoId] = useState(''); 
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');*/


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
            
            console.log('videoId: '+ videoId +' title: ' + title 
            + ' description: ' + description + ' High quality thumb: ' + thumbnail);
        });

        //Följande data vägrar skickas inte till mongoDb, vet ej varför? 
        const video = new Videos(videoId, title, description, thumbnail) 
        video.save((video)=>{
            if(err) return console.log("Övningsinfo skickades ej till databasen"); 
            console.log('videoId: '+ videoId +'title: ' + title 
            + 'description: ' + description + 'High quality thumb: ' + thumbnail); 
        })
    })
}
export default postVideo; 