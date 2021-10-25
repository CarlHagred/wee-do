import mongoose from "mongoose";

const videosInfo = mongoose.Schema({
  title: String,
  videoId: String
});

const videos = mongoose.model("Videos", videosInfo);
export default videos;
