import Patient from "../../models/patient.js";
import bcrypt from "bcrypt";

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
      const hashedUsername = await bcrypt.hash(name, 10);
      const newPatient = new Patient({
        name: hashedUsername,
      });
      await newPatient.save();
      console.log(`Success, new patient with name: ${name}`);
      //skickar det skapade namnet till klienten så det kan visas för personalen
      res.status(201).json(name);
    }
  });
};
