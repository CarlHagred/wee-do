import Patient from "../../models/patient.js";

import passport from "passport";
import passportLocal from "passport-local";
import initializeStrategy from "../config/passportConfig.js";
const LocalStrategy = passportLocal.Strategy;

export const loginPatient = async (req, res, next) => {
  try {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("Ingen användare finns!");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("LYCKAD AUTH");
          console.log(req.user);
        });
      }
    })(req, res, next);
    const name = req.query.username;
    const patient = await Patient.findOne({ name: name });
    console.log(patient);
    res.status(200).json(req.query.username);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  /*
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
    ))*/
};

// TESTA LOGGA IN PATIEN
/*
export const testLoginPatiet = async (req, res) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else{
            req.login(user, (err) => {
                if(err) throw err;
                res.send("Successfully authenticated");
                console.log(req.user);
            })
        }
    })
}*/

//hämta en patient
export const getPatient = async (req, res) => {
  try {
    const name = req.query.username;
    const patient = await Patient.findOne({ name: name });
    console.log(patient);
    res.status(200).json(req.query.username);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
