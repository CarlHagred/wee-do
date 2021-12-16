import Patient from "../../models/patient.js";
import Videos from "../../models/videos.js";

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
export const getSession =  (req, res) => {
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
  if (req.params.active == "true") {
    Patient.findOneAndUpdate(
      {
        name: req.params.name,
        "statistics.vidId": req.params.videoId,
      },
      {
        $inc: { "statistics.$.timesWatched": 1, "statistics.$.scans": 0 },
        $push: { "statistics.$.watchedTime": new Date() },
      },
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
                  vidTitle: req.params.title,
                  scans: 0,
                  timesWatched: 1,
                  scanTime: [],
                  watchedTime: [new Date()],
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
  }
  if (req.params.active == "false") {
    res.status(200).send("Inactive");
  }
};

export const postSelectedVideos = async (req, res) => {
  const amountOfTimesArray = JSON.parse(req.params.selectedexercises);

  amountOfTimesArray.forEach((value, index) => {
    Patient.findOneAndUpdate(
      {
        name: req.params.name,
        "statistics.vidId": value.id,
      },
      { $set: { "statistics.$.amountOfTimes": value.amount } },
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
                  vidId: value.id,
                  vidTitle: req.params.title,
                  scans: 0,
                  timesWatched: 0,
                  scanTime: [],
                  watchedTime: [],
                  amountOfTimes: value.amount,
                },
              },
            },
            { safe: true, new: true },
            (err, doc) => {
              res.status(200);
            }
          );
        }
      }
    );
  });
};

export const deletePatient = async (req, res) => {
  const name = req.body.name;
  await Patient.deleteOne({ name: name }).then((patient) => {
    if (!patient) {
      return res.status(404).send({
        message: "Patient not found with name: " + name,
      });
    }
    res.status(200).send({ message: "Patient deleted successfully!" });
  });
};

export const setPatientInactive = async (req, res) => {
  const name = req.params.name;
  Patient.findOneAndUpdate(
    { name: name },
    { $set: { active: false } },
    { new: true },
    (err, doc) => {
      if (doc) {
        res.status(200).send("Success");
      }
    }
  );
};

export const setPatientActive = async (req, res) => {
  const name = req.params.name;
  Patient.findOneAndUpdate(
    { name: name },
    { $set: { active: true } },
    { new: true },
    (err, doc) => {
      if (doc) {
        res.status(200).send("Success");
      }
    }
  );
};

export const getVideoUrl = async (req, res) => {
  try {
    const id = req.query.id;
    Videos.findOne({ videoId: id }, function (err, isVideoInDb) {
      if (isVideoInDb != null) {
        const videoId = isVideoInDb.videoId;
        let videoUrl = "http://www.youtube.com/embed/" + videoId;
        res.send(videoUrl);
      } else {
        res.send("http://www.youtube.com/embed/404");
      }
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getMyVideos = async (req, res) => {
  const name = req.query.name;

  console.log('name in server: ', name); 
  if(name) {
    const patient = await Patient.findOne({name: name}); 
    console.log(patient);
    console.log(patient.statistics); //statistics


    if(!patient) {
      return res.status(403).json({data: 'No videos due to null patient'}); 
    } 
    
    const data = patient.statistics.filter(video => {
      return video.amountOfTimes; 
    })
    return res.json({data: data})
  }
  return res.status(403).json({data: 'No videos due to null patient'});
};