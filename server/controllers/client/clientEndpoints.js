import Videos from '../../models/videos.js'; 

export const getVideoUrl = async (req, res) => {
  try {
    //qrkoden som skickas i requesten nås med req.query.qr
    //TODO Lägg till kod för att skicka tillbaka yt-länk från databasen
    const title = req.query.titel; 
    console.log('Video title: '+title)
    Videos.findOne({övningsTitel: title}, function (err, isVideoInDb){
      if(isVideoInDb != null){
        const videoId = isVideoInDb.övningsId; 
        console.log('VideoId From Server: ' +videoId)
        let videoUrl = 'http://www.youtube.com/embed/'+videoId; 
        res.send(videoUrl); 
      }else {
        res.send('http://www.youtube.com/embed/404')
        console.log(err); 
      }
    })
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
