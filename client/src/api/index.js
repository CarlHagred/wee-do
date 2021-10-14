import axios from 'axios';

const serverUrl = 'http://localhost:8000';

export const getNewPatient = () => axios.get(`${serverUrl}/newpatient`);

export const getAllPatients = () => axios.get(`${serverUrl}/getpatients`);

export const getVideo = () => axios.get(`${serverUrl}/getvideo`);
