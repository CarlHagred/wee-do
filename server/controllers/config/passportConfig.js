import Patient from '../../models/patient.js';
import Admin from '../../models/admin.js';
import passportLocal from 'passport-local';

const LocalStrategy = passportLocal.Strategy;

//Definition av en lokal strategi för hur vi hanterar autentisering av ett angivet användarnamn
const initializeStrategy = (passport) => {
  passport.use(
    'userLogin',
    new LocalStrategy(
      { usernameField: 'name', passwordField: 'name' },
      (name, password, done) => {
        Patient.findOne({ name: name }, (err, user) => {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, console.log('Användare finns ej!'));
          }
          return done(null, user);
        });
      }
    )
  );

  //Skapar en session där cookiens ID är namnet på användaren
  passport.serializeUser((user, done) => {
    if (user instanceof Patient) {
      done(null, { id: user.id, type: 'Patient' });
    } else {
      done(null, { id: user.id, type: 'Admin' });
    }
    //done(null, user.id);
  });

  //Hittar sessionens ID och avslutar sessionen
  passport.deserializeUser((obj, done) => {
    if (obj.type === 'Patient') {
      Patient.findOne({ _id: obj.id }, (err, user) => {
        const patientInformation = {
          name: user.name,
        };
        done(err, patientInformation);
      });
    } else {
      Admin.findOne({ _id: obj.id }, (err, user) => {
        const adminInformation = {
          username: user.username,
        };
        done(err, adminInformation);
      });
    }
  });

  passport.use(
    'adminLogin',
    new LocalStrategy(
      (username, password, done) => {
        Admin.findOne({ username: username }, (err, user) => {
          if (err) return done(err);
          
          if (!user) return done(null, false, console.log('Användare finns ej!'));
          
          if(!password === user.password) return done(null, false, console.log('Lösenordet stämmer ej'));

          return done(null, user)
  
        });
      }
    )
  );
};

export default initializeStrategy;
