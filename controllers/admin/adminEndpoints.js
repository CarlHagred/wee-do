import Patient from "../../models/patient.js";
import Videos from "../../models/videos.js";

export const postPatient = async (req, res) => {
  const createRandomName = () =>
    Math.floor(Math.random() * 899999 + 100000).toString();
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
        active: true,
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

export const getActivePatients = async (req, res) => {
  try {
    const patients = await Patient.find({ active: true });
    res.status(200).json(patients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getInactivePatients = async (req, res) => {
  try {
    const patients = await Patient.find({ active: false });
    res.status(200).json(patients);
  } catch (error) {
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

export const deleteVideos = async (req, res) => {
  const id = req.body.videoId;
  await Videos.deleteOne({ videoId: id }).then((videos) => {
    if (!videos) {
      return res.status(404).send({
        message: "Video not fount with id: " + id,
      });
    }
    res.status(200).send({ message: "Video deleted successfully!" });
  });
};

export const getVideoTitleById = async (req, res) => {
  try {
    const vidId = req.query.videoId;
    const video = await Videos.find({ videoId: vidId });
    const title = video[0].videoTitle;
    const description = video[0].description;
    res.json({
      title: title,
      description: description,
    });
  } catch (error) {
    res.json("Could not fetch the title of the video due to: " + error);
  }
};
