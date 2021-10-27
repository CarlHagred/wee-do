import Patient from '../../models/patient.js';

import passport from 'passport';

//Hanterar själva inloggning av en användare med hjälp av vår lokala strategi
export const loginPatient = (req, res, next) => {
  passport.authenticate('userLogin', (err, user, info) => {
    if (err) {
      return err, null;
    }
    if (!user) res.send('Ingen användare finns!');
    else {
      req.logIn(user, (err) => {
        if (err) {
          return err, null;
        }
        res.send('auth');
      });
    }
  })(req, res, next);
};

//Hämtar den pågående sessionen
export const getSession = (req, res) => {
  res.json(req.user);
};

//Förstör den pågående sessionen
export const deleteSession = (req, res) => {
  req.session.destroy(() => {
    res.send('Logged out');
  });
};
