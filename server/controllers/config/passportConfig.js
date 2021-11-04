import Patient from "../../models/patient.js";
import passportLocal from "passport-local";

const LocalStrategy = passportLocal.Strategy;

//Definition av en lokal strategi för hur vi hanterar autentisering av ett angivet användarnamn
const initializeStrategy = (passport) => {
  passport.use(
    new LocalStrategy(
      { usernameField: "name", passwordField: "name" },
      (name, password, done) => {
        Patient.findOne({ name: name }, (err, user) => {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, console.log("Användare finns ej!"));
          }
          return done(null, user);
        });
      }
    )
  );

  //Skapar en session där cookiens ID är namnet på användaren
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  //Hittar sessionens ID och avslutar sessionen
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
