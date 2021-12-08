import axios from "axios";

const serverUrl = "http://localhost:8000";

/* ===== Patient calls ===== */

export const getNewPatient = () => axios.get(`${serverUrl}/newpatient`);

export const getOnePatient = (name) =>
    axios.get(`${serverUrl}/getonepatient/${name}`); 

export const getAllPatients = () => axios.get(`${serverUrl}/getpatients`);

export const deletePatientIndex = async (params) => {
    await axios.delete(`${serverUrl}/deletepatient`,{
        data: {
            name: params
        }
    });
}

export const setPatientInactiveIndex = async (name) => 
    axios.put(`${serverUrl}/setpatientinactive/${name}`);

export const setPatientActiveIndex = async (name) => 
    axios.put(`${serverUrl}/setpatientactive/${name}`);

export const getAllActivePatients = () => axios.get(`${serverUrl}/getactivepatients`);

export const getAllInactivePatients = () => axios.get(`${serverUrl}/getinactivepatients`);



/* ===== Session calls ===== */

export const getSession = () =>
    axios.get(`${serverUrl}/getsession`, { withCredentials: true });

export const getAdminSession = () =>
    axios.get(`${serverUrl}/getadminsession`, { withCredentials: true });

/* ===== Login calls ===== */

  

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
            localStorage.setItem("isAuthenticatedPatient", "true");
            const error = document.getElementById("patientError");
            error.innerHTML = "<span></span>";
            document.getElementById("loginPatient").style.borderColor = "green";
        } else {
            const error = document.getElementById("patientError");
            error.innerHTML =
                "<span style='color:#C22D39;'> Användare finns ej </span>";
            document.getElementById("loginPatient").style.borderColor =
                "#C22D39";
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
        window.location = "/";
    });
};

//Exercise based requests
export const loginAdmin = (params) => {
    axios({
        method: "POST",
        data: params,
        withCredentials: true,
        url: `${serverUrl}/adminlogin`, //ska fixas
    }).then((res) => {
        if (res.data === "auth") {
            //Ändra namn?
            window.location = "/adminpanel"; // Namn ska fixas
            localStorage.setItem("isAuthenticatedAdmin", "true");
            let error = document.getElementById("adminError");
            error.innerHTML = `<span></span>`;
            document.getElementById("adminUsername").style.borderColor =
                "green";
            document.getElementById("adminPassword").style.borderColor =
                "green";
        } else {
            let error = document.getElementById("adminError");
            error.innerHTML = `<span style='color:#E83544;'> Användarnamnet eller lösenordet är fel </span>`;
            document.getElementById("adminUsername").style.borderColor =
                "#E83544";
            document.getElementById("adminPassword").style.borderColor =
                "#E83544";
        }
    });
};

export const logoutAdmin = () => {
    axios({
        method: "DELETE",
        withCredentials: true,
        url: `${serverUrl}/logoutadmin`, // Ska fixas
    }).then((res) => {
        window.location = "/admin";
    });
};

/* ===== Video calls ===== */

export const getAllVideos = () => axios.get(`${serverUrl}/getvideos`);

export const getVideoUrl = (params) =>
    axios.get(`${serverUrl}/getvideourl`, { params });

export const postScan = (name, videoId) =>
    axios.post(`${serverUrl}/postscan/${name}/${videoId}`);

export const postWatchedVideo = (name, videoId, active, title) =>
    axios.post(`${serverUrl}/postwatchedvideo/${name}/${videoId}/${active}/${title}`);

export const postVideo = videoData => {
    axios.post(`${serverUrl}/upload/`, videoData);
}

export const getTitleAndDescById = async (id) => {
    const response = await axios.get(`${serverUrl}/getVideoTitleAndDescription`, {
        params: {
            videoId: id
        }
    })
    return response.data; 
}

export const deleteVideoIndex = async (params) => {
    await axios.delete(`${serverUrl}/deletevideo`,{
        data: {
            videoId : params
        }
    }).then(response => { 
    })
}

export const updateDatabase = async () => await axios.post(`${serverUrl}/updateDatabase`);

