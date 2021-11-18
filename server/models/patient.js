import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
  name: String,
  statistics: Array,
  videos: Array,
});

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
