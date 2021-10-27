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