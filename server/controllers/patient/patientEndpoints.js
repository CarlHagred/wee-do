import Patient from "../../models/patient.js";

import passport from "passport";

export const loginPatient = (req, res, next) => {
  console.log(req.body);
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("Ingen användare finns!");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("LYCKAD AUTH");
        console.log(req.user);
      });
    }
  })(req, res, next);
};
