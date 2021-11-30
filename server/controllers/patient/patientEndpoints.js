import Patient from "../../models/patient.js";

import passport from "passport";
import { loginAdmin } from "../admin/adminLogin.js";

//Hanterar själva inloggning av en användare med hjälp av vår lokala strategi
export const loginPatient = (req, res, next) => {
  passport.authenticate("userLogin", (err, user, info) => {
    if (err) {
      return err, null;
    }
    if (!user) res.send("Ingen användare finns!");
    else {
      req.logIn(user, (err) => {
        if (err) {
          return err, null;
        }
        res.send("auth");
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
    res.send("Logged out");
  });
};

export const postScan = async (req, res) => {};

export const postWatchedVideo = async (req, res) => {
  Patient.findOneAndUpdate(
    {
      name: req.params.name,
      "statistics.vidId": req.params.videoId,
    },
    { $inc: { "statistics.$.timesWatched": 1, "statistics.$.scans": 0 } },
    {
      new: true,
    },
    (err, doc) => {
      if (doc) {
        res.status(200).send("Success");
      }

      if (!doc) {
        Patient.findOneAndUpdate(
          { name: req.params.name },
          {
            $push: {
              statistics: {
                vidId: req.params.videoId,
                scans: 0,
                timesWatched: 1,
              },
            },
          },
          { safe: true, new: true },
          (err, doc) => {
            res.status(200).send("Success");
          }
        );
      }
    }
  );
};

export const postSelectedVideos = async (req, res) => {
  const amountOfTimesArray = JSON.parse(req.params.selectedexercises);
  const name = req.params.name;

  try {
    amountOfTimesArray.forEach((value) => {
      Patient.findOneAndUpdate(
        {
          name: name,
          "statistics.vidId": value.id,
        },
        { $set: { "statistics.$.amountOfTimes": value.amount } },
        {
          new: true,
        },
        (err, doc) => {
          if (!doc) {
            Patient.findOneAndUpdate(
              { name: name },
              {
                $push: {
                  statistics: {
                    vidId: alue.id,
                    scans: 0,
                    timesWatched: 0,
                    amountOfTimes: req.params.value.amount,
                  },
                },
              },
              { safe: true, new: true }
            );
          }
        }
      );
    });

    res.status(200).send("Success");
  } catch (e) {
    console.log(e);
  }
};
