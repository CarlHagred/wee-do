import Patient from "../../models/patient.js";
import passport from "passport";
import passportLocal from "passport-local";
import { authPatient } from "../patient/patientEndpoints.js";

const LocalStrategy = passportLocal.Strategy;
/*
export const initializeStrategy = async (req, res) => passport.use(new LocalStrategy(
    function authenticateUser (username, done) {
      Patient.findOne({ name: Patient }, async (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
      });
    },
  ));*/

export const initializeStrategy = () => {
  passport.use(new LocalStrategy(authPatient));

  passport.serializeUser((user, done) => {
    console.log("Serialize user");
    console.log(user);

    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    console.log("---------> Deserialize Id")
    console.log(id)

    done (null, id)
  })

}

export default initializeStrategy;