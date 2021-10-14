import passport from "passport";
import Patient from "../../models/patient.js";
import LoginStrategy from "../config/passportConfig"

// Serialize user with name
passport.serializeUser(function (id, done){
    done(null, id);
});
passport.deserializeUser(function(id, done){
    Patient.findById(id, function(err, user) {
        done(err, user);
    })
});

passport.use("local-login", LoginStrategy);
/*
passport.deserializeUser(function (name, done){
    done(null, name);
})*/

// Dokumentationen
/*
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
*/

//passport.use("local-login", LoginStrategy)

export default passport;