import { space } from "postcss/lib/list";
import React, { useEffect, useState } from "react";
import CountryInput from "../components/CountryInput";
import PostCodeInput from "../components/PostCodeInput";
import CityInput from "../components/CityInput";
import StreetAdress from "../components/StreetAdress";
import Calendar from "/assets/icon-calendar.svg";
import ArrowDown from "/assets/icon-arrow-down.svg";
import ItemList from "../components/ItemList";
import AddInvoiceBtn from "../components/AddItemBtn";
import Discard from "../components/Discard";
import SaveAsDraft from "../components/SaveAsDraft";
import SaveSend from "../components/SaveSend";
export default function AddInvoice({ darkMode }) {
  const [rotate, setRotate] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    <div className="">
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
        <div className="flex flex-col gap-[45px] sm:flex-row">
          <div className="flex w-[full] gap-[16px] sm:gap-[20px]">
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
              className="z-[2] absolute right-[35px]"
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
        <h2 className="text-[#7E88C3] text-[18px] mt-[126px] font-bold leading-[32px] tracking-[-0.375px]">
          Item List
        </h2>
        <div className="flex flex-col gap-[50px] md:gap-[18px] lg:gap-[18px]">
          <ItemList darkMode={darkMode} />
          <ItemList darkMode={darkMode} />
        </div>
      </div>

      <AddInvoiceBtn darkMode={darkMode} />

      <div
        className={`flex gap-[7px] mt-[21px] bg-white  sm:justify-between w-full h-[91px] items-center absolute left-0 justify-center ${
          darkMode && window.innerWidth < 400 ? "bg-[#1E2139]" : "bg-[#141625]"
        }`}
      >
        <Discard />
        <div className="flex gap-[7px]">
          <SaveAsDraft darkMode={darkMode} />
          <SaveSend darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}
