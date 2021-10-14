import Patient from "../../models/patient.js";
import passport from "passport";
import passportLocal from "passport-local";

const LocalStrategy = passportLocal.Strategy;

export const initializeStrategy = async (req, res) => passport.use(new LocalStrategy(
    function authenticateUser (username, done) {
      Patient.findOne({ name: Patient }, async (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
      });
    },
  ));

export default initializeStrategy;