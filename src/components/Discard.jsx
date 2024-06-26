import React from "react";

export default function Discard({ darkMode }) {
  console.log(darkMode);
  return (
    <button
      className={`h-[48px] rounded-[24px] bg-[#F9FAFE] text-[#7E88C3] text-[15px] font-bold leading-[15px] tracking-[-0.25px] flex justify-center items-center py-[15px] px-[25px] ${
        darkMode ? "bg-[#252945] text-[##E88C3] " : ""
      }`}
    >
      Discard
    </button>
  );
}
