import Patient from "../../models/patient.js";
import passportLocal from "passport-local";
//import passport from "passport";

const LocalStrategy = passportLocal.Strategy;

const initializeStrategy = (passport) => {
  passport.use(
    new LocalStrategy({usernameField: 'name', passwordField: 'name'},
      (name, password, done) => {
      Patient.findOne({ name: name }, (err, user) => {
        if (err) {return done(err)};
        if (!user) {return done(null, false, {message: "Användare finns ej!"})};
        return done(null, user);
      });
    })
  );

  passport.serializeUser((user, done) => {
    console.log("Blir nu serialized");
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    Patient.findOne({ _id: id }, (err, user) => {
      const patientInformation = {
        name: user.name,
      };
      done(err, patientInformation);
    });
  });
};

export default initializeStrategy;
