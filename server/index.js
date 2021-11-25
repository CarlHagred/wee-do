import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/routes.js";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";
import localStrategy from "./controllers/config/passportConfig.js";

/* 
    FÖR ATT STARTA SERVER GÖR FÖLJANDE: 
    1. ligg i mappen /wee-do/server/ och skriv "npm install"
        för att installera samtliga dependencies
    2. skriv "npm start" i terminalen (se till att ligga i servermappen)
    3. se i terminalen så det står: "Server upp and running, and connected to database on port: 8000"
*/

//configuration of env file
dotenv.config();

const PORT = process.env.PORT;

//const app = express();

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(8000);

const root = require("path").join(__dirname, "build");
app.use(express.static(root));

app.path = {
  auth: "/api/auth",
  homepage: "/api/homepage",
};

app.use(cors());

//middleware with passport
app.use(express.json());
app.use(
  cors({
    origin: "https://vardspel.se/weedo",
    credentials: true,
  })
);

app.use(
  session({
    secret: "cats",
    resave: false,
    saveUninitialized: true,
  })
); // Ha secret session, tillfällig ska sedan läggas in i session
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public")); //osäker om nödvändig
localStrategy(passport);
app.use(routes);
//app.use(videoRoutes);
app.use(morgan("dev"));
//Database connection
const CONNECTION_URI = process.env.CONNECTION_DB_URI;
const databaseConnection = async () => {
  try {
    await mongoose.connect(CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(
        `Server upp and running, and connected to database on port: ${PORT}`
      );
    });
  } catch (error) {
    //denna console-loggen är bra om man får fel vid serverstart
    console.log(error.message);
  }
};
databaseConnection();
export default app;
