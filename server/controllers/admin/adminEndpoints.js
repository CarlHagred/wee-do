import Patient from "../../models/patient.js";
import Videos from "../../models/videos.js";

export const postPatient = async (req, res) => {
  const createRandomName = () => Math.random().toString(20).substr(2, 6);
  const name = createRandomName();

  Patient.findOne({ name: name }, async (err, doc) => {
    if (err) res.send(err);

    //om mot förmodan namnet redan finns så körs hela funktionen om
    if (doc) {
      console.log(
        `Conflict, name: ${name} already exists, re-running function`
      );
      postPatient(req, res);
    }
    //om det inte finns en patient med samma namn så skapas patienten
    if (!doc) {
      const newPatient = new Patient({
        name: name,
      });
      await newPatient.save();
      console.log(`Success, new patient with name: ${name}`);
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
console.log(req.params.videoId);
    await Patient.deleteOne({"name": req.params.videoId});
    /*.then(videos => {
      if(!videos){
        return req.sttus(404).send({
          message: "Video not fount with id: " + req.params.videoId
        })
      }
      res.send({message: "Video deleted successfully!"})
    })*/
};