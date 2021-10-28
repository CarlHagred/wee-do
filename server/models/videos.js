/**
 * Här är videos collection som används för mongodb. 
 * Det kan utökas med flera variabler vid behov 
 */

import mongoose from "mongoose"; 
const  Schema = mongoose.Schema;
const videoSchema = new Schema({
  övningsId: String, 
  övningsTitel: String,  
  övningsBeskrivning: String,  
  övningsOmslag: String 

}); 

const Videos = mongoose.model("videos", videoSchema);
export default Videos; 