import Patient from "../../models/patient.js";
import passport from "passport";
import passportLocal from "passport-local";

const LocalStrategy = passportLocal.Strategy;

export const initializeStrategy = (passport) => {
  passport.use(
    new LocalStrategy((name, done) => {
      Patient.findOne({ name: name }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        return done(null, false);
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    Patient.findOne({ _id: id }, (err, user) => {
      const patientInformation = {
        username: user.username,
      };
      cb(err, patientInformation);
    });
  });
};

export default initializeStrategy;
