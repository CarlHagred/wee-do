/*
    HÄR SKRIVER VI ALL LOGIK FÖR VÅRA ROUTES

    GÖR DU ETT CALL TILL DATABASEN MÅSTE DU GÖRA 
    FUNKTIONEN ASYNKRON
    EXEMPEL PÅ ASYNKRON FUNKTION:

    export const getTest = async (req, res) => {
        try {
            const VARIABELNAMN = await DATABASQUERY();

            res.status(200).json("HÄR SKRIVER DU DITT RESPONSE");

        } catch (error) {
            res.status(404).json("HÄR SKRIVER DU FELMEDDELANDET")
        }
};

STATUSKODER VI SKA ANVÄNDA:
200: allt är bra 
404: resource finns ej  
409: conflict, tex en användare som försöker läggas till finns redan i databasen    
500: server error


*/

import Patient from "../models/patient.js";

export const getTest = (req, res) => {
  console.log("detta funkar");

  try {
    res.status(200).json("detta funkar");
  } catch (error) {}
};

//Test för postpatient
export const postPatient = async (req, res) => {
  try {
    const newPatient = new Patient({
      name: "Test1",
    });
    await newPatient.save();
    console.log("patient skapad");
  } catch (error) {}
};