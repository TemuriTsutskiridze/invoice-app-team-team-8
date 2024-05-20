import React from "react";
import StreetAdress from "../components/StreetAdress";
import PostCodeInput from "../components/PostCodeInput";
import CountryInput from "../components/CountryInput";
import ItemList from "../components/ItemList";
import CityInput from "../components/CityInput";
import Calendar from "/assets/icon-calendar.svg";
import ArrowDown from "/assets/icon-arrow-down.svg";
import { useState, useEffect } from "react";
export default function CreateInvoiceContent({ darkMode }) {
  const [rotate, setRotate] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(darkMode);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="lg:w-[617px]">
      <div className="flex flex-col gap-[22px] mt-[26px]">
        <div className="flex">
          <h2
            className={`text-[24px] font-bold leading-[32px] inline ${
              darkMode ? "text-white" : ""
            }`}
          >
            New Invoice
          </h2>
        </div>

        <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#7C5DFA]">
          Bill From
        </span>
      </div>
      <form className="mt-[24px] flex flex-col gap-[45px]">
        <StreetAdress darkMode={darkMode} />
        <div className="flex flex-col gap-[45px] sm:flex-row sm:gap-[24px]">
          <div className="flex gap-[16px] sm:gap-[20px] w-full">
            <CityInput darkMode={darkMode} />
            <PostCodeInput darkMode={darkMode} />
          </div>
          <CountryInput darkMode={darkMode} />
        </div>
      </form>
      <div className="mt-[106px]">
        <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#7C5DFA] ">
          Bill To
        </span>
      </div>
      <form className="mt-[24px] flex flex-col gap-[45px]">
        <label
          htmlFor="input"
          className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px]"
        >
          Client's Name
          <input
            type="text"
            className={` border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] ${
              darkMode
                ? "text-white border-[1px]  border-[var(--04,#252945)] bg-[var(--03,_#1E2139)]"
                : "text-black"
            }   `}
          />
        </label>
        <label
          htmlFor="input"
          className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px]   "
        >
          Client's Email
          <input
            type="text"
            className={` border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] ${
              darkMode
                ? "text-white border-[1px]  border-[var(--04,#252945)] bg-[var(--03,_#1E2139)]"
                : "text-black"
            }   `}
          />
        </label>
        <div className="flex flex-col gap-[45px] sm:flex-row sm:gap-[24px]">
          <div className="flex gap-[16px] sm:gap-[20px] w-full">
            <CityInput darkMode={darkMode} />
            <PostCodeInput darkMode={darkMode} />
          </div>
          <CountryInput darkMode={darkMode} />
        </div>
      </form>
      <form className="flex flex-col gap-[45px] mt-[65px]">
        <label
          htmlFor="date"
          className="  text-[15px]  leading-[15px]  font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] "
        >
          Invoice Date
          <label className="flex justify-end items-center ">
            <img
              src={Calendar}
              alt="calendar logo "
              className="z-[2] absolute right-[35px] lg:left-[712px] sm:left-[565px]"
            />
            <input
              type="date"
              className={` border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] w-full ${
                darkMode
                  ? "text-white border-[1px]  border-[var(--04,#252945)] bg-[var(--03,_#1E2139)]"
                  : "text-black"
              }   `}
            />
          </label>
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
            className={` border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] ${
              darkMode
                ? "text-white border-[1px]  border-[var(--04,#252945)] bg-[var(--03,_#1E2139)]"
                : "text-black"
            }   `}
          />
        </label>
      </form>
      <div>
        <h2 className="text-[#7E88C3] text-[18px]  mt-[126px] font-bold leading-[32px] tracking-[-0.375px]">
          Item List
        </h2>
        <div className="flex flex-col gap-[50px] md:gap-[18px] lg:gap-[18px]">
          <ItemList darkMode={darkMode} />
          <ItemList darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}
