import React from "react";
import Bin from "/assets/icon-delete.svg";
export default function ItemList({ darkMode }) {
  return (
    <div className="text-[#7E88C3] text-[18px]  font-bold leading-[32px] tracking-[-0.375px]">
      <form className="flex flex-col gap-[22px] mt-[22px] sm:flex-row  sm:gap-[16px] md:gap-[24px] lg:gap-[32px]">
        <label
          htmlFor="input"
          className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px] flex-1 min-w-[46px] lg:min-w-[214px]"
        >
          Item Name
          <input
            type="text"
            className={`border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-black ${
              darkMode
                ? "text-white border-[1px]  border-[var(--04,#252945)] bg-[var(--03,_#1E2139)]"
                : "text-black"
            }`}
          />
        </label>
        <div className="flex sm:flex-row  sm:gap-[16px] md:gap-[24px] lg:gap-[32px] gap-[16px]">
          <label
            htmlFor="input"
            className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px] flex-1 min-w-[46px] "
          >
            Qty.
            <input
              type="number"
              className={`border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-black sm:max-w-[100px] lg:min-w-[46px] ${
                darkMode
                  ? "text-white border-[1px]  border-[var(--04,#252945)] bg-[var(--03,_#1E2139)]"
                  : "text-black"
              } `}
            />
          </label>

          <label
            htmlFor="input"
            className={`text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px] flex-1 min-w-[46px] 
              d`}
          >
            Price
            <input
              type="number"
              className={`border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-black sm:max-w-[100px] lg:min-w-[100px] ${
                darkMode
                  ? "text-white border-[1px]  border-[var(--04,#252945)] bg-[var(--03,_#1E2139)]"
                  : "text-black"
              }`}
            />
          </label>

          <label className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px] flex-1 min-w-[46px] lg:min-w-[100px]">
            Total
            <div className="text-[13px] font-medium tracking-[-0.1px] text-[#7E88C3] h-[48px] w-full  flex py-[16px] px-[16px] items-center justify-between  ">
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
