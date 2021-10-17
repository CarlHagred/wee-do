import Patient from "../../models/patient.js";

import passport from "passport";
import passportLocal from "passport-local";
const LocalStrategy = passportLocal.Strategy;
/*
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
        }§
    ))
}*/

export const authPatient = async (req, res) =>{
    try {
        const name = req.query.username;
        const patient = await Patient.findOne({name: name})
        console.log(patient);
        res.status(200).json(req.query.username)
        
        if(!patient){
            return res.send(done(null, false));
        };

        if(patient){
            return res.send(done(null, patient));
        };

        return done(null, patient);

        
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
}

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
        const patient = await Patient.findOne({name: name})
        console.log(patient);
        res.status(200).json(req.query.username)
        
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
