import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
  name: String,
});

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
