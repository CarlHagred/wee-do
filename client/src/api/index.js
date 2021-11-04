import axios from 'axios';

const serverUrl = 'http://localhost:8000';

export const getNewPatient = () => axios.get(`${serverUrl}/newpatient`);

export const getAllPatients = () => axios.get(`${serverUrl}/getpatients`);

export const getSession = () =>
  axios.get(`${serverUrl}/getsession`, { withCredentials: true });

export const getAdminSession = () =>
  axios.get(`${serverUrl}/getadminsession`, { withCredentials: true });

//API-call tills servern som hämtar användaren som har blivit autentiserad och skickar vidare användaren till Scanner-sidan
export const loginPatient = (params) => {
  axios({
    method: 'POST',
    data: params,
    withCredentials: true,
    url: `${serverUrl}/loginpatient`,
  }).then((res) => {
    if(res.data === "auth"){
      window.location = "/activitypanel"
      localStorage.setItem("isAuthenticatedPatient", "true")
      let error = document.getElementById("patientError");
      error.innerHTML = `<span></span>`;
      document.getElementById('loginPatient').style.borderColor = 'green';
    } else {
      let error = document.getElementById('patientError');
      error.innerHTML = `<span style='color:#C22D39;'> Användare finns ej </span>`;
      document.getElementById('loginPatient').style.borderColor = '#C22D39';
    }
  });
};

//Hämtar användare som är inloggad och förstör cookien som är skapad i backend
export const logoutPatient = () => {
  axios({
    method: 'DELETE',
    withCredentials: true,
    url: `${serverUrl}/logoutpatient`,
  }).then((res) => {
    window.location.reload();
  });
};

export const loginAdmin = (params) => {
  axios({
    method: 'POST',
    data: params,
    withCredentials: true,
    url: `${serverUrl}/adminlogin`, //ska fixas
  }).then((res) => {
    if(res.data === "auth"){ //Ändra namn?
      window.location = '/adminpanel' // Namn ska fixas
      localStorage.setItem("isAuthenticatedAdmin", "true")
      let error = document.getElementById("adminError");
      error.innerHTML = `<span></span>`;
      document.getElementById('adminUsername').style.borderColor = 'green';
      document.getElementById('adminPassword').style.borderColor = 'green';
    } else {
      let error = document.getElementById('adminError');
      error.innerHTML = `<span style='color:#E83544;'> Användarnamnet eller lösenordet är fel </span>`;
      document.getElementById('adminUsername').style.borderColor = '#E83544';
      document.getElementById('adminPassword').style.borderColor = '#E83544';
    }
  });
};

export const logoutAdmin = () => {
  axios({
    method: 'DELETE',
    withCredentials: true,
    url: `${serverUrl}/logoutadmin`, // Ska fixas
  }).then((res) => {
    window.location.reload();
  });
};

export const getVideoUrl = (params) =>
  axios.get(`${serverUrl}/getvideourl`, { params });
