import { space } from "postcss/lib/list";
import React, { useState } from "react";
import CountryInput from "../components/CountryInput";
import PostCodeInput from "../components/PostCodeInput";
import CityInput from "../components/CityInput";
import StreetAdress from "../components/StreetAdress";
import Calendar from "/assets/icon-calendar.svg";
import ArrowDown from "/assets/icon-arrow-down.svg";
import ItemList from "../components/ItemList";
import AddInvoiceBtn from "../components/AddInvoiceBtn";
export default function AddInvoce() {
  const [rotate, setRotate] = useState(false);
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
          Client's Name
          <input
            type="text"
            className=" border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-black"
          />
        </label>
        <label
          htmlFor="input"
          className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px]   "
        >
          Client's Email
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
          Invoice Date
          <input
            type="date"
            className=" border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px]  py-[16px]  text-[15px] font-bold h-[48px] leading-[15px] tracking-[-0.25px] text-black px-[16px]"
          />
          <div className="absolute z-[2] right-[42px] top-[954px]">
            <img src={Calendar} alt="calendar logo " className="z-[2]" />
          </div>
        </label>
        <label
          htmlFor="input"
          className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3]   "
        >
          Payment Terms
          <div className=" border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] py-[16px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-black px-[16px] flex justify-end items-center h-[48px] ">
            <div
              className={`cursor-pointer [transition:500ms] ${
                rotate ? "rotate-180" : ""
              }`}
              onClick={() => setRotate(!rotate)}
            >
              <img src={ArrowDown} alt="arrow-icon" />
            </div>
          </div>
        </label>
        <label
          htmlFor="input"
          className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px]   "
        >
          Project Description
          <input
            type="text"
            className=" border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-black"
          />
        </label>
      </form>
      <div>
        <h2 className="text-[#7E88C3] text-[18px] mt-[126px] font-bold leading-[32px] tracking-[-0.375px]">
          Item List
        </h2>
        <div className="flex flex-col gap-[50px] md:gap-[18px] lg:gap-[18px]">
          <ItemList />
          <ItemList />
        </div>
      </div>
      <AddInvoiceBtn />
    </div>
  );
}
