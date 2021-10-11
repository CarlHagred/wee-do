import User from "./Icons/User";

const variants = {
  user: User,
  dog: "🐶",
};

const Icon = ({ name, ...props }) => {
  const Tag = name in variants ? variants[name] : variants.dog;

  return <Tag {...props} />;
};

export default Icon;
