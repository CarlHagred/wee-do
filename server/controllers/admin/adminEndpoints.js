import Patient from "../../models/patient.js";
import Videos from "../../models/videos.js";
import {deleteFromYoutubePlaylist} from "./videoHandler.js"; 
export const postPatient = async (req, res) => {
  const createRandomName = () => Math.random().toString(20).substr(2, 6);
  const name = createRandomName();

  Patient.findOne({ name: name }, async (err, doc) => {
    if (err) res.send(err);

    //om mot förmodan namnet redan finns så körs hela funktionen om
    if (doc) {
      postPatient(req, res);
    }
    //om det inte finns en patient med samma namn så skapas patienten
    if (!doc) {
      const newPatient = new Patient({
        name: name,
        statistics: [],
        videos: [],
      });
      await newPatient.save();
      //skickar det skapade namnet till klienten så det kan visas för personalen
      res.status(201).json(name);
    }
  });
};

//hämta alla patienter
export const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getOnePatient = async (req, res) => {
  try {
    const patient = await Patient.findOne({ name: req.params.name });
    res.status(200).json(patient);
  } catch {
    res.status(404).json({ message: error.message });
  }
};

//Hämtar alla inlagda övningar
export const getVideos = async (req, res) => {
  try {
    const videos = await Videos.find();
    //const result = JSON.parse(JSON.stringify(videos))
    //res.status(200).json(result);
    res.status(200).json(videos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const deleteVideo = async (req, res) => {
  const id = req.body.videoId; 
  deleteFromYoutubePlaylist(req, res, id); 

  // Below code deletes the video from the db, it's commented out to testing the YT-implementation part

    // await Videos.deleteOne({"videoId": id})
    // .then(videos => {
    //   if(!videos){
    //     return res.status(404).send({
    //       message: "Video not fount with id: " + id
    //     })
    //   }
    //   //Once deleted from db, code here to delete it from yt-channel. 
    //   res.status(200).send({message: "Video deleted successfully!"})
    // })
};

export const getVideoTitleById = async (req, res) => {

  try {
    const vidId = req.query.videoId;
    const video = await Videos.find({videoId: vidId}) 
    const title = video[0].videoTitle;
    const description = video[0].description;  
    res.json(
      {
        title: title, 
        description: description
      }
    ); 
  } catch (error) {
    res.json("Could not fetch the title of the video due to: "+error); 
  } 
};