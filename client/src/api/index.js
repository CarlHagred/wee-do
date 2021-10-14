import axios from "axios";

const serverUrl = "http://localhost:8000";

export const getNewPatient = () => axios.get(`${serverUrl}/newpatient`);

export const getAllPatients = () => axios.get(`${serverUrl}/getpatients`);

export const loginPatient = () => axios.post(`${serverUrl}`);

export const getPatient = () => axios.get(`${serverUrl}/getpatient`);

//export const getActivities = () => axios.get(`${serverUrl}/activities`)

