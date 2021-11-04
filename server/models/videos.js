/**
 * Här är videos collection som används för mongodb. 
 * Det kan utökas med flera variabler vid behov 
 */

import mongoose from "mongoose"; 
const  Schema = mongoose.Schema;
const videoSchema = new Schema({
  videoId: String, 
  videoTitle: String,  
  description: String,  
  thumbnail: String 
}); 

const Videos = mongoose.model("videos", videoSchema);
export default Videos; 