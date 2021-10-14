import Patient from "../../models/patient.js";

import passport from "passport";
import passportLocal from "passport-local";
const LocalStrategy = passportLocal.Strategy;

export const loginPatient = async (req, res) => {
    passport.use(new LocalStrategy(
        function (name, done){
            Patient.findOne({ name: name }, function(err, patient){
                if(err) {
                    return res.send(done(err))
                };

                if(!patient){
                    return res.send(done(null, false, {message: 'Fel användare'}))
                    //return done(null, false, { message: 'Fel användarnamn'});
                };

                return done (null, patient);
            });
        }
    ))
}

//hämta en patient
export const getPatient = async (req, res) => {
    try {
      const patient = await Patient.collection("patientSchema").findOne({}, function(err, result){
          if(err) throw err;
          console.log(result.name);
      });
      res.status(200).json(patient);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
