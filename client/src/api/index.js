import axios from "axios";

/* ===== Patient calls ===== */

export const getNewPatient = () => axios.get(`/newpatient`);

export const getOnePatient = (name) => axios.get(`/getonepatient/${name}`);

export const getAllPatients = () => axios.get(`/getpatients`);

export const deletePatientIndex = async (params) => {
  await axios.delete(`/deletepatient`, {
    data: {
      name: params,
    },
  });
};

/* ===== Session calls ===== */

export const getSession = () =>
  axios.get(`/getsession`, { withCredentials: true });

export const getAdminSession = () =>
  axios.get(`/getadminsession`, { withCredentials: true });

/* ===== Login calls ===== */

//API-call tills servern som hämtar användaren som har blivit autentiserad och skickar vidare användaren till Scanner-sidan
export const loginPatient = (params) => {
  axios({
    method: "POST",
    data: params,
    withCredentials: true,
    url: `/loginpatient`,
  }).then((res) => {
    if (res.data === "auth") {
      window.location = "/#/activitypanel";
      localStorage.setItem("isAuthenticatedPatient", "true");
      const error = document.getElementById("patientError");
      error.innerHTML = "<span></span>";
      document.getElementById("loginPatient").style.borderColor = "green";
    } else {
      const error = document.getElementById("patientError");
      error.innerHTML =
        "<span style='color:#C22D39;'> Användare finns ej </span>";
      document.getElementById("loginPatient").style.borderColor = "#C22D39";
    }
  });
};

//Hämtar användare som är inloggad och förstör cookien som är skapad i backend
export const logoutPatient = () => {
  axios({
    method: "DELETE",
    withCredentials: true,
    url: `/logoutpatient`,
  }).then((res) => {
    window.location.reload();
  });
};

//Exercise based requests
export const loginAdmin = (params) => {
  axios({
    method: "POST",
    data: params,
    withCredentials: true,
    url: `/adminlogin`, //ska fixas
  }).then((res) => {
    if (res.data === "auth") {
      //Ändra namn?
      window.location = "/#/adminpanel"; // Namn ska fixas
      localStorage.setItem("isAuthenticatedAdmin", "true");
      let error = document.getElementById("adminError");
      error.innerHTML = `<span></span>`;
      document.getElementById("adminUsername").style.borderColor = "green";
      document.getElementById("adminPassword").style.borderColor = "green";
    } else {
      let error = document.getElementById("adminError");
      error.innerHTML = `<span style='color:#E83544;'> Användarnamnet eller lösenordet är fel </span>`;
      document.getElementById("adminUsername").style.borderColor = "#E83544";
      document.getElementById("adminPassword").style.borderColor = "#E83544";
    }
  });
};

export const logoutAdmin = () => {
  axios({
    method: "DELETE",
    withCredentials: true,
    url: `/logoutadmin`, // Ska fixas
  }).then((res) => {
    window.location.reload();
  });
};

/* ===== Video calls ===== */

export const getAllVideos = () => axios.get(`/getvideos`);

export const getVideoUrl = (params) => axios.get(`/getvideourl`, { params });

export const postScan = (name, videoId) =>
  axios.post(`/postscan/${name}/${videoId}`);

export const postWatchedVideo = (name, videoId) =>
  axios.post(`/postwatchedvideo/${name}/${videoId}`);

export const postVideo = (videoData) => {
  axios.post(`/upload/`, videoData);
};

export const getTitleAndDescById = async (id) => {
  const response = await axios.get(`/getVideoTitleAndDescription`, {
    params: {
      videoId: id,
    },
  });
  return response.data;
};

export const deleteVideoIndex = async (params) => {
  await axios
    .delete(`/deletevideo`, {
      data: {
        videoId: params,
      },
    })
    .then((response) => {});
};
