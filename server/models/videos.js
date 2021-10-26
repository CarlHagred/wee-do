import mongoose from "mongoose"; 

const videoSchema = mongoose.Schema({
  videoId : {
    type: String
  },
  title: {
    type: String
  },  
  description : {
    type: String
  }, 
  thumbnail : {
    type: String
  }
}, {timestamps: true})

const Videos = mongoose.model("Videos", videoSchema);
export default Videos; 