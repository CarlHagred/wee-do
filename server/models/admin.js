import mongoose from 'mongoose'; 
const adminSchema = mongoose.Schema({
    name: String, 
    username: String, 
    password: String
});
const admin = mongoose.model("physiotherapist", adminSchema); 
export default admin; 