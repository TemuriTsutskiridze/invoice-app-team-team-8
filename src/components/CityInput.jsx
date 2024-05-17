import React from "react";

export default function CityInput() {
  return (
    <>
      <label
        htmlFor="input"
        className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px]   "
      >
        City
        <input
          type="text"
          className=" border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-black"
        />
      </label>
    </>
  );
}
