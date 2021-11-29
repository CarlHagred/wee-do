import { ImQrcode } from "react-icons/im";
import { FaUser, FaUserPlus, FaTrashAlt } from "react-icons/fa";
import { MdUpload, MdAdminPanelSettings } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { BiError, BiLogOut, BiNotepad } from "react-icons/bi";
import { BsGraphUp , BsFillPersonFill} from "react-icons/bs";
import { MdPersonOff } from "react-icons/md";

import SearchPatient from "../images/IconSearchPatient";
import SearchExercise from "../images/IconSearchExercise";

// Ikoner hämtas från https://react-icons.github.io/react-icons/
// Fler ikoner?: Nya ikoner importeras och läggs in i variants

const variants = {
    qrcode: ImQrcode,
    user: FaUser,
    add_user: FaUserPlus,
    upload: MdUpload,
    trash: FaTrashAlt,
    search: IoMdSearch,
    error: BiError,
    exit: BiLogOut,
    notepad: BiNotepad,
    admin_panel: MdAdminPanelSettings,
    search_patient: SearchPatient,
    search_exercise: SearchExercise,
    statistics: BsGraphUp,
    patientInactive: MdPersonOff,
    patientActive: BsFillPersonFill,
};

const Icon = ({ name, ...props }) => {
    const Tag = name in variants ? variants[name] : variants.error;

    return <Tag {...props} />;
};

export default Icon;
