import passport from "passport";
import Patient from "../../models/patient.js";
import LoginStrategy from "../config/passportConfig"

// Serialize user with email
passport.serializeUser(function (name, done){
    done(null, name);
})

passport.deserializeUser(function (name, done){
    done(null, name);
})

passport.use("local-login", LoginStrategy)

export default passport;