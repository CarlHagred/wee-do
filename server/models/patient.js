import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
  name: String,
  statistics: Object,
});

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
