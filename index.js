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

const app = express();

//middleware with passport
app.use(express.json());
app.use(
  cors({
    origin: "https://weedo-v2.herokuapp.com/",
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
app.use("/api", routes);
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
    app.listen(process.env.PORT, () => {
      console.log(`Server upp and running, and connected to database`);
    });
  } catch (error) {
    //denna console-loggen är bra om man får fel vid serverstart
    console.log(error.message);
  }
};
databaseConnection();

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});
export default app;
