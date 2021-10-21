import axios from "axios";

const serverUrl = "http://localhost:8000";

export const getNewPatient = () => axios.get(`${serverUrl}/newpatient`);

export const getAllPatients = () => axios.get(`${serverUrl}/getpatients`);

export const getSession = () => axios.get(`${serverUrl}/getsession`, {withCredentials: true});

export const loginPatient = (params) => {
  axios({
    method: "POST",
    data: params,
    withCredentials: true,
    url: `${serverUrl}/loginpatient`,
  }).then((res) => {
    if(res.data === "auth"){
      console.log(res.data)
      window.location = "/scanner"
    }
  });
};
