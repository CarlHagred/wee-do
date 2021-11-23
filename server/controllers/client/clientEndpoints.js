/* import Videos from "../../models/videos.js";

export const getVideoUrl = async (req, res) => {
    try {
        const id = req.query.id;
        Videos.findOne({ videoId: id }, function (err, isVideoInDb) {
            if (isVideoInDb != null) {
                const videoId = isVideoInDb.videoId;
                let videoUrl = "http://www.youtube.com/embed/" + videoId;
                res.send(videoUrl);
            } else {
                res.send("http://www.youtube.com/embed/404");
            }
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
 */
