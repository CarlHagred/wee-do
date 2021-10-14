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

/*
export const loginPatient = async (req, res) => {
    Passport.authenticate("local-login", function (error, user, info){
        if (error){
            return res.status(500).json({
                message: error || "something hände"
            })
        }

        req.loginPatient(user, function (error, data){
            if (error){
                return res.status(500).json({
                    message: error || "something hände"
                })
            }
        });

        user.isAuthenticated = true;
        return res.json(user);
    })(req, res)
}*/