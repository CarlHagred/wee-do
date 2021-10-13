import Patient from "../../models/patient";
import passport from "passport";
import passportLocal from "passport-local";
import { PromiseProvider } from "mongoose";

const LocalStrategy = passportLocal.Strategy;

const initialize = () => passport.use(new LocalStrategy(
    function authenticateUser (username, done) {
      Patient.findOne({ name: Patient }, async (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
      });
    },
  ));
  
  export default initialize;


const authenticateUser = async (req, res) => {
    try {
        const patient = await Patient.find();
        res.status(200).json(patient)
                     
        } catch (error) {
            res.status(404).json({message: error.message})
        }
    }



const LoginStrategy = () => (
    {usernameField: "name"},
    function (name, done){
        Patient.findOne({ name })
        .lean()
        .exec((err, user) => {
            if (err){
                return done(err, null);
            }

            if (!user){
                return done("Ingen användare funnen", null);
            }

            return done(null, user);
        });
    }
)

export default LoginStrategy;