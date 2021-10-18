import Patient from "../../models/patient.js";

import passport from "passport";
import passportLocal from "passport-local";
const LocalStrategy = passportLocal.Strategy;

/* export const loginPatient = async (req, res) => {
  passport.use(
    new LocalStrategy(function (name, done) {
      Patient.findOne({ name: name }, function (err, patient) {
        if (err) {
          return res.send(done(err));
        }

        if (!patient) {
          return res.send(done(null, false, { message: "Fel användare" }));
          //return done(null, false, { message: 'Fel användarnamn'});
        }

        return done(null, patient);
      });
    })
  );
}; */

export const loginPatient = async (req, res) => {
  passport.authenticate("local-login", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(user);
      });
    }
  })(req, res, next);
};
