import Patient from "../../models/patient.js";

import passport from "passport";

export const loginPatient = (req, res, next) => {
  //console.log(req.body);
  passport.authenticate("local", (err, user, info) => {
    //console.log(user);
    if (err) {return err, null};
    if (!user) res.send("Ingen användare finns!");
    else {
      req.logIn(user, (err) => {
        if (err) {return err, null};
        res.send("LYCKAD AUTH");
        //console.log(user);
      });
    }
  })(req, res, next);
};
