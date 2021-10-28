//import Admin from '../../models/admin';

import passport from 'passport';

//Hanterar själva inloggning av en användare med hjälp av vår lokala strategi
export const loginAdmin = (req, res, next) => {
  passport.authenticate('adminLogin', (err, user, info) => {
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
export const getAdminSession = (req, res) => {
  res.json(req.user);
};

//Förstör den pågående sessionen
export const deleteAdminSession = (req, res) => {
  req.session.destroy(() => {
    res.send('Logged out');
  });
};
