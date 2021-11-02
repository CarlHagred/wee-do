import { logoutPatient, logoutAdmin } from "../../api";

export const logout = () => {
   if(window.confirm("Är du säker på att du vill logga ut?")){
      logoutPatient();
      window.location = "/"
    };
  };

export const logoutAdminConformation = () => {
  if(window.confirm("Är du säker på att du vill logga ut?")){
    logoutAdmin();
    window.location = "/admin";
  }
};


export default logout + logoutAdminConformation;