import { logoutPatient } from "../../api";

export const logout = () => {
   if(window.confirm("Är du säker på att du vill logga ut?")){
      logoutPatient();
      window.location = "/"
    };
  };



export default logout;