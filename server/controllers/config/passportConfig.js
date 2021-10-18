import Patient from "../../models/patient.js";
import passportLocal from "passport-local";

const LocalStrategy = passportLocal.Strategy;

const initializeStrategy = (passport) => {
  passport.use(
    new LocalStrategy((name, done) => {
      console.log(name);
      Patient.findOne({ name: name }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        return done(null, user);
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    Patient.findOne({ _id: id }, (err, user) => {
      const patientInformation = {
        name: user.name,
      };
      cb(err, patientInformation);
    });
  });
};

export default initializeStrategy;
