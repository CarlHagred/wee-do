import Patient from "../../models/patient.js";

export const postPatient = async (req, res) => {
  const createRandomName = () => Math.random().toString(20).substr(2, 6);
  const name = createRandomName();
  const testObj = {
    vidId: "test",
    scans: 0,
    timesWatched: 0,
  };

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
        statistics: [testObj],
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

export const getOnePatient = async (req, res) => {
  try {
    const patient = await Patient.findOne({ name: req.params.name });
    res.status(200).json(patient);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
