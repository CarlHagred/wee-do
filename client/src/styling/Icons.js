import { ImQrcode } from "react-icons/im";
import { FaUser, FaUserPlus, FaTrashAlt } from "react-icons/fa";
import { MdUpload } from "react-icons/md";
import { BiError } from "react-icons/bi";

const variants = {
  qrcode: ImQrcode,
  user: FaUser,
  add_user: FaUserPlus,
  upload: MdUpload,
  trash: FaTrashAlt,
  error: BiError,
};

const Icon = ({ name, ...props }) => {
  const Tag = name in variants ? variants[name] : variants.error;

  return <Tag {...props} />;
};

export default Icon;
