import Patient from "../../models/patient.js";
import passport from "passport";
import passportLocal from "passport-local";

const LocalStrategy = passportLocal.Strategy;

const initializeStrategy = (passport) => {
  passport.use(
    new LocalStrategy((username, done) => {
      Patient.findOne({ name: username }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      });
    })
  );
};

export default initializeStrategy;
