import { logoutPatient } from "../../api";

export const logout = (user) => {

   if(window.confirm("Är du säker på att du vill logga ut?")){
      logoutPatient();
      window.location = "/"
      console.log("logout :)");
    };
  };



export default logout;