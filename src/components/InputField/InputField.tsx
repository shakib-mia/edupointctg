import { inputTypes } from "../../interfaces/inputTypes";

export const InputField = (props: inputTypes) => {
  const { id, label, className } = props;

  return (
    <>
      <label className="text-white capitalize ml-1 text-left" htmlFor={id}>
        {label}
      </label>
      <br />
      <div className="relative">
        <input
          {...props}
          className={`px-4 py-2 focus:outline-none rounded-sm w-full mb-3 text-black ${className}`}
        />

        <div className="absolute top-0 left-0">
          <i className="fa-solid fa-house text-black"></i>
        </div>
      </div>
    </>
  );
};

// export default InputField;
