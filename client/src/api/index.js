import axios from "axios";

const serverUrl = "http://localhost:8000";

export const getNewPatient = () => axios.get(`${serverUrl}/newpatient`);

export const getOnePatient = (name) =>
  axios.get(`${serverUrl}/getonepatient/${name}`);

export const getAllPatients = () => axios.get(`${serverUrl}/getpatients`);

export const getSession = () =>
  axios.get(`${serverUrl}/getsession`, { withCredentials: true });

//API-call tills servern som hämtar användaren som har blivit autentiserad och skickar vidare användaren till Scanner-sidan
export const loginPatient = (params) => {
  axios({
    method: "POST",
    data: params,
    withCredentials: true,
    url: `${serverUrl}/loginpatient`,
  }).then((res) => {
    if (res.data === "auth") {
      window.location = "/activitypanel";
    } else {
      console.log("Användare finns ej");
    }
  });
};

//Hämtar användare som är inloggad och förstör cookien som är skapad i backend
export const logoutPatient = () => {
  axios({
    method: "DELETE",
    withCredentials: true,
    url: `${serverUrl}/logoutpatient`,
  }).then((res) => {
    window.location.reload();
  });
};

//Exercise based requests
export const getVideoUrl = (params) =>
  axios.get(`${serverUrl}/getvideourl`, { params });
