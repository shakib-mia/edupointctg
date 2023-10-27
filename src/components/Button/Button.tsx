import { ButtonTypes } from "../../interfaces/ButtonTypes";

export const Button = ({ children, type, className }: ButtonTypes) => {
  return (
    <button
      className={`px-4 py-2 rounded-md ${
        type === "primary" && "bg-primary text-white"
      } ${
        type === "secondary" && "bg-secondary hover:bg-secondary-700 text-black"
      } ${className || ""}`}
    >
      {children}
    </button>
  );
};
