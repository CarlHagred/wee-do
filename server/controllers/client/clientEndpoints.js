import Videos from '../../models/videos.js'; 

export const getVideoUrl = async (req, res) => {
  try {
    //qrkoden som skickas i requesten nås med req.query.qr
    //TODO Lägg till kod för att skicka tillbaka yt-länk från databasen
    const title = req.query.qr; 
    
    Videos.findOne({övningsTitel: title}, function (err, isVideoInDb){
      if(isVideoInDb !== null){
        const videoId = isVideoInDb.övningsId; 
        let videoUrl = 'http://www.youtube.com/embed/'+videoId; 
        res.status(200).json({
          success: true, 
          url: videoUrl
        });
      }else {
        res.status(404).json({
          success:false, 
          url: 'http://www.youtube.com/embed/404'
        })
        console.log(err); 
      }
    })
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
