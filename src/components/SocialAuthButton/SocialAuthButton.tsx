// import React from "react";

interface inputType {
  icon: string | false;
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const SocialAuthButton = ({ icon, text, onClick }: inputType) => {
  return (
    <button
      className="mx-auto w-full flex items-center gap-2 justify-center border border-secondary-600 text-white hover:bg-secondary-600 disabled:border-[#fff8] transition hover:text-black py-4 rounded-md"
      onClick={() => onClick()}
    >
      <img src={icon ? icon : ""} className="w-4" alt="" />
      <p className="font-medium tracking-wider">{text}</p>
    </button>
  );
};

export default SocialAuthButton;
