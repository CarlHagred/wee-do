import { ImQrcode } from "react-icons/im";
import { FaUser, FaUserPlus, FaTrashAlt } from "react-icons/fa";
import { MdUpload } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { BiError } from "react-icons/bi";

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
};

const Icon = ({ name, ...props }) => {
  const Tag = name in variants ? variants[name] : variants.error;

  return <Tag {...props} />;
};

export default Icon;
