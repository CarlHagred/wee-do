import { logoutPatient, logoutAdmin } from "../../api";
import { Confirm } from "react-st-modal";

export const customDialogPatient = async () => {
    const conf = await Confirm(
        "Är du säker på att du vill logga ut?",
        "Logga ut",
        "OK",
        "Avbryt"
    );
    if (conf) {
        localStorage.clear();
        logoutPatient();
    }
};

export const customDialogAdmin = async () => {
    const conf = await Confirm(
        "Är du säker på att du vill logga ut?",
        "Logga ut",
        "OK",
        "Avbryt"
    );
    if (conf) {
        localStorage.clear();
        logoutAdmin();
    }
};


export default customDialogPatient + customDialogAdmin;
