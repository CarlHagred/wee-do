import Passport from "../config/";
import Patient from "../../models/patient";


export const loginPatient = async (req, res) => {
    Passport.authenticate("local-login", function (error, user, info){
        if (error){
            return res.status(500).json({
                message: error || "something hände"
            })
        }

        req.loginPatient(user, function (error, data){
            if (error){
                return res.status(500).json({
                    message: error || "something hände"
                })
            }
        });

        user.isAuthenticated = true;
        return res.json(user);
    })(req, res)
}