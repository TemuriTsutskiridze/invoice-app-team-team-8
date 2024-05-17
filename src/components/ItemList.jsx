import React from "react";
import Bin from "/assets/icon-delete.svg";
export default function ItemList() {
  return (
    <div className="text-[#7E88C3] text-[18px] mt-[126px] font-bold leading-[32px] tracking-[-0.375px]">
      Item List
      <form className="flex flex-col gap-[22px] mt-[22px] sm:flex-row sm:gap-[16px] md:gap-[24px] lg:gap-[32px]">
        <label
          htmlFor="input"
          className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px] "
        >
          Item Name
          <input
            type="text"
            className="border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-black"
          />
        </label>

        <div className="flex  sm:flex-row gap-[22px] sm:gap-[16px] md:gap-[24px] lg:gap-[32px] ">
          <label
            htmlFor="input"
            className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px] flex-1"
          >
            Qty.
            <input
              type="number"
              className="border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-black"
            />
          </label>
          <label
            htmlFor="input"
            className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px] flex-1"
          >
            Price
            <input
              type="number"
              className="border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-black"
            />
          </label>
          <label
            htmlFor="div"
            className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px] flex-1"
          >
            Total
            <div className="text-[13px] font-medium tracking-[-0.1px] text-[#7E88C3] h-[48px] w-full border-bold flex py-[16px] px-[16px] items-center justify-between border-[1px] border-[solid] border-[black] flex-1">
              <span className="text-[#888EB0] text-[15px] font-bold leading-[15px] tracking-[-0.25px]">
                400
              </span>
              <div>
                <img src={Bin} alt="bin-logo" />
              </div>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
}
