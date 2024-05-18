import React from "react";

export default function StreetAdress({ darkMode }) {
  return (
    <>
      <label
        htmlFor="input"
        className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px]   "
      >
        Street Address
        <input
          type="text"
          className={` border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] ${
            darkMode
              ? "text-white border-[1px]  border-[var(--04,#252945)] bg-[var(--03,_#1E2139)]"
              : "text-black"
          }   `}
        />
      </label>
    </>
  );
}
