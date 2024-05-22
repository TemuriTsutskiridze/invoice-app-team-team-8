import React from "react";
import StreetAdress from "../components/StreetAdress";
import PostCodeInput from "../components/PostCodeInput";
import CountryInput from "../components/CountryInput";
import ItemList from "../components/ItemList";
import CityInput from "../components/CityInput";
import Calendar from "/assets/icon-calendar.svg";
import ArrowDown from "/assets/icon-arrow-down.svg";

import Bin from "/assets/icon-delete.svg";
import { useState, useEffect } from "react";
export default function CreateInvoiceContent({ darkMode }) {
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
  const [rotate, setRotate] = useState(false);

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([
    {
      itemName: "",
      quantity: 0,
      price: 0,
      total: 0,
    },
  ]);
  console.log(items);
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [payment, setPayment] = useState("");

  const days = [
    {
      days: 1,
      id: 1,
    },
    {
      days: 7,
      id: 2,
    },
    {
      days: 14,
      id: 3,
    },
    { days: 30, id: 4 },
  ];
  return (
    <div className="lg:w-[617px]">
      <form className="mt-[24px] flex flex-col gap-[45px]">
        <label
          htmlFor="input"
          className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px]   "
        >
          Street Address
          <input
            type="text"
            onChange={(e) => setStreet(e.target.value)}
            className={` border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] ${
              darkMode
                ? "text-white border-[1px]  border-[var(--04,#252945)] bg-[var(--03,_#1E2139)]"
                : "text-black"
            }   `}
          />
        </label>
        <div className="flex flex-col gap-[45px] sm:flex-row sm:gap-[24px]">
          <div className="flex gap-[16px] sm:gap-[20px] w-full">
            <label
              htmlFor="input"
              className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px] w-[45%]"
            >
              City
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                className={`border-[var(--05,#DFE3FA)] rounded-[4px] sm:max-w-[150px]   border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-black ${
                  darkMode
                    ? "text-white border-[1px]  border-[var(--04,#252945)] bg-[var(--03,_#1E2139)]"
                    : "text-black"
                }`}
              />
            </label>
            <div className="w-[45%]">
              <label
                htmlFor="input"
                className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px]   "
              >
                Post Code
                <input
                  onChange={(e) => setPostCode(e.target.value)}
                  type="text"
                  className={`border-[var(--05,#DFE3FA)] rounded-[4px] sm:max-w-[150px]   border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-black ${
                    darkMode
                      ? "text-white border-[1px]  border-[var(--04,#252945)] bg-[var(--03,_#1E2139)]"
                      : "text-black"
                  }`}
                />
              </label>
            </div>
          </div>
          <label
            htmlFor="input"
            className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px]   "
          >
            Country
            <input
              onChange={(e) => setCountry(e.target.value)}
              type="text"
              className={` border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] w-full ${
                darkMode
                  ? "text-white border-[1px]  border-[var(--04,#252945)] bg-[var(--03,_#1E2139)]"
                  : "text-black"
              }   `}
            />
          </label>
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
            onChange={(e) => setClientName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
            className={` border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] ${
              darkMode
                ? "text-white border-[1px]  border-[var(--04,#252945)] bg-[var(--03,_#1E2139)]"
                : "text-black"
            }   `}
          />
        </label>
        <div className="flex flex-col gap-[45px] sm:flex-row sm:gap-[24px]">
          <div className="flex gap-[16px] sm:gap-[20px] w-full">
            <label
              htmlFor="input"
              className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px] w-[45%]"
            >
              City
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                className={`border-[var(--05,#DFE3FA)] rounded-[4px] sm:max-w-[150px]   border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-black ${
                  darkMode
                    ? "text-white border-[1px]  border-[var(--04,#252945)] bg-[var(--03,_#1E2139)]"
                    : "text-black"
                }`}
              />
            </label>
            <div className="w-[45%]">
              <label
                htmlFor="input"
                className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px]   "
              >
                Post Code
                <input
                  onChange={(e) => setPostCode(e.target.value)}
                  type="text"
                  className={`border-[var(--05,#DFE3FA)] rounded-[4px] sm:max-w-[150px]   border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-black ${
                    darkMode
                      ? "text-white border-[1px]  border-[var(--04,#252945)] bg-[var(--03,_#1E2139)]"
                      : "text-black"
                  }`}
                />
              </label>
            </div>
          </div>
          <label
            htmlFor="input"
            className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px]   "
          >
            Country
            <input
              type="text"
              onChange={(e) => setCountry(e.target.value)}
              className={` border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] pr-[0] py-[15px] pl-[20px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] w-full ${
                darkMode
                  ? "text-white border-[1px]  border-[var(--04,#252945)] bg-[var(--03,_#1E2139)]"
                  : "text-black"
              }   `}
            />
          </label>
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
              onChange={(e) => setDate(e.target.value)}
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
          className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3]  "
        >
          Payment Terms
          <div className="w-full border-[var(--05,#DFE3FA)] rounded-[4px] border-[1px] py-[16px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-black px-[16px] flex justify-end items-center h-[48px] ">
            <div
              className={`w-full justify-start ${darkMode ? "text-white" : ""}`}
            >
              Next {payment} Day{payment > 1 ? "s" : ""}
            </div>
            <div
              className={`cursor-pointer [transition:500ms] ${
                rotate ? "rotate-180" : ""
              }`}
              onClick={() => setRotate(!rotate)}
            >
              <img src={ArrowDown} alt="arrow-icon" />
            </div>
          </div>
          {rotate && (
            <div className="flex justify-end ">
              <div className="absolute flex flex-col w-[240px] h-[191px] rounded-[8px] bg-[#FFF] [box-shadow:0px_10px_20px_0px_rgba(72,_84,_159,_0.25)]">
                {days.map((day, index) => {
                  return (
                    <div className="flex flex-col" key={index}>
                      <div
                        onClick={() => setPayment(day.days.toString())}
                        className="w-full flex  items-center px-[24px] cursor-pointer h-[46px] text-[15px] font-bold leading-[15px] tracking-[-0.25px]"
                      >
                        Next {day.days} Day{day.days > 1 ? "s" : ""}
                      </div>
                      <div className="bg-[#DFE3FA] w-full h-[1px]"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </label>
        <label
          htmlFor="input"
          className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px]   "
        >
          Project Description
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
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
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="text-[#7E88C3] text-[18px]  font-bold leading-[32px] tracking-[-0.375px]"
              >
                <form className="flex flex-col gap-[22px] mt-[22px] sm:flex-row  sm:gap-[16px] md:gap-[24px] lg:gap-[32px]">
                  <label
                    htmlFor="input"
                    className="text-[13px] font-medium tracking-[-0.1px] flex flex-col gap-[9px] text-[#7E88C3] h-[48px] flex-1 min-w-[46px] lg:min-w-[214px]"
                  >
                    Item Name
                    <input
                      type="text"
                      value={item.itemName}
                      onChange={(e) => {
                        setItems([...item]);
                      }}
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
          })}
        </div>
      </div>
    </div>
  );
}

