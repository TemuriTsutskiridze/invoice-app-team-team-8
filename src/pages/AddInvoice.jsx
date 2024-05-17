import { space } from "postcss/lib/list";
import React from "react";
import CountryInput from "../components/CountryInput";
import PostCodeInput from "../components/PostCodeInput";
import CityInput from "../components/CityInput";
import StreetAdress from "../components/StreetAdress";
import Calendar from "/assets/icon-calendar.svg";
export default function AddInvoce() {
  return (
    <div className="">
      <div className="flex flex-col gap-[22px] mt-[26px]">
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
      <form className="mt-[24px] flex flex-col gap-[45px]">
        <StreetAdress />
        <div className="flex  justify-between">
          <CityInput />
          <PostCodeInput />
        </div>
        <CountryInput />
      </form>
      <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#7C5DFA] mt-[100px]">
        Bill To
      </span>
      <form className="mt-[24px] flex flex-col gap-[45px]">
        <label
          htmlFor="input"
          className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px]"
        >
          Client’s Name
          <input
            type="text"
            className=" border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-black"
          />
        </label>
        <label
          htmlFor="input"
          className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px]   "
        >
          Client’s Email
          <input
            type="text"
            className=" border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-black"
          />
        </label>

        <div className="flex justify-between">
          <CityInput />
          <PostCodeInput />
        </div>
        <CountryInput />
      </form>
      <form className="flex flex-col gap-[45px] mt-[65px]">
        <label
          htmlFor="date"
          className="  text-[15px]  leading-[15px]  font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] "
        >
          <div className="absolute h-full w-full flex items-center justify-end">
            <img src={Calendar} alt="calendar logo" />
          </div>
          Invoice Date
          <input
            type="date"
            className=" border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold h-[48px] leading-[15px] tracking-[-0.25px] text-black px-[16px]"
          />
        </label>
      </form>
    </div>
  );
}
