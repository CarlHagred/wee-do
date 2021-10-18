import axios from 'axios';

const serverUrl = 'http://localhost:8000';

export const getNewPatient = () => axios.get(`${serverUrl}/newpatient`);

export const getAllPatients = () => axios.get(`${serverUrl}/getpatients`);

export const getVideoUrl = (params) =>
  axios.get(`${serverUrl}/getvideourl`, { params });
