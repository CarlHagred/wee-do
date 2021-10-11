import admin from "../models/admin.js";

const adminList = []

//creating a new admin, input will be taken from the body
export const createAdmin = async (req, res) => {
  try {
    const newAdmin = new admin ({
      name: req.body.name,
      username: req.body.username, 
      password: req.body.password
    }); 
    await newAdmin.save();
    adminList.push(newAdmin)
    res.status(201).send(newAdmin)
  } catch (error) {}
};
export const getAdmin = async (req, res) => {
  try {
      res.json(adminList)
  } catch (error) {
    
  }
} 
