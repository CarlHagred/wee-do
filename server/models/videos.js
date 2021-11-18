import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
  videoId: String,
  videoTitle: String,
  description: String,
  thumbnail: String,
});

const Videos = mongoose.model("videos", videoSchema);
export default Videos;
