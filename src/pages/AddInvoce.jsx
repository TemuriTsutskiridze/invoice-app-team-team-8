import { space } from "postcss/lib/list";
import React from "react";

export default function AddInvoce() {
  return (
    <div className="">
      <div className="flex flex-col gap-[22px]">
        <div className="flex">
          <h2 className="text-[24px] font-bold leading-[32px] inline">Edit </h2>
          <span className="text-[#888EB0] text-[24px] font-bold leading-[32px] tracking-[-0.5px]">
            #<span className="text-black inline-flex">{"code"}</span>
          </span>
        </div>

        <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#7C5DFA]">
          Bill From
        </span>
      </div>
      <form className="mt-[24px]">
        <div className="flex flex-col gap-[9px]">
          <label
            htmlFor="input"
            className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px]   "
          >
            Street Address
            <input
              type="text"
              className=" border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-black"
            />
          </label>
        </div>
      </form>
    </div>
  );
}
