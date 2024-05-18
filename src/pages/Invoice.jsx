import React, { useState, useEffect } from "react";
import Arrowleft from "/assets/icon-arrow-left.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import data from "../data.json";

function Invoice() {
  const params = useParams();

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 640);

  const invoiceById = data.find((invoice) => {
    return invoice.id === params.id;
  });
  console.log(invoiceById);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const content = (
    <div
      className="
    flex justify-center align-middle w-full bg-[#FFF] [box-shadow:0px_10px_10px_-10px_rgba(72,_84,_159,_0.10)]">
      <div className="center flex flex-row mt-[21px] mr-0 mb-[22px] ml-[24px] gap-[8px]">
        <button className="w-[73px] h-[48px] rounded-[24px] text-[#7E88C3] bg-[#F9FAFE] font-[League_Spartan] text-[15px] font-bold leading-[15px] hover:bg-[#DFE3FA] cursor-pointer transition-all duration-300 ease-linear">
          Edit
        </button>
        <button className="rounded-[24px] bg-[#EC5757] w-[89px] h-[48px] text-[#FFF] font-[League_Spartan] text-[15px] font-bold leading-[15px] hover:bg-[#FF9797] cursor-pointer transition-all duration-300 ease-linear ">
          Delete
        </button>
        <button className="w-[149px] h-[48px] rounded-[24px] bg-[#7C5DFA] text-[#FFF] text-center  text-[15px] font-bold leading-[15px] hover:bg-[#9277FF] cursor-pointer transition-all duration-300 ease-linear ">
          Mark as Paid
        </button>
      </div>
    </div>
  );
  return (
    <main className="w-screen flex justify-center flex-col align-center bg-[var(--11,_#F8F8FB)]">
      <div className="w-full h-[72px] bg-black"></div>
      <div className="Container flex justify-center flex-col px-[24px] py-0 w-full lg:px-[320px] xl:px-[450px]">
        <div className="dekstop 2xl: flex  flex-col justify-center items-center w-full">
          <div className="Status flex  justify-start align-start gap-[6px] pt-[33px] w-full mb-[33px]">
            <Link to={"/"} className="flex items-center gap-2">
              <img
                src={Arrowleft}
                alt=""
                className="Arrow-left top w-[5px] h-[10px] m-[8px]"
              />
              <span className=" cursor-pointer text-[15px] font-bold tracking-[-0.25px] hover:text-[#7E88C3] font-[League_Spartan] transition-all duration-300 ease-linear">
                Go back
              </span>
            </Link>
          </div>
          <div className="StatusCheck flex justify-between items-center w-full h-[91px] sm:justify-between gap-[20px] rounded-[8px] bg-[#FFF] [box-shadow:0px_10px_10px_-10px_rgba(72,_84,_159,_0.10)] ">
            <div className="div flex flex-row items-center gap-[20px] max-sm:w-full max-sm:justify-between ">
              <span className="text-[#858BB2] font-[League_Spartan] text-[13px] font-medium leading-[15px] ml-[24px]">
                Status
              </span>
              <ul className="mr-[48px] list-none relative w-fit flex items-center justify-center w-[104px] h-[40px] px-[10px]">
                <div className="div absolute rounded-[6px] opacity-[0.0571] bg-[#FF8F00] top-0 left-0   flex-shrink-0  h-full w-full      z-[10]"></div>
                <li className="text-[#FF8F00] font-[League_Spartan] text-[15px] font-bold leading-[15px] tracking-[-0.25px] relative">
                  <span className=" capitalize before:content-['\2022'] before:text-[#FF8F00] before:mr-[8px]">
                    {invoiceById.status}
                  </span>
                </li>
              </ul>
            </div>
            {isDesktop && (
              <div className="flex justify-center align-middle w-fit bg-[#FFF] [box-shadow:0px_10px_10px_-10px_rgba(72,_84,_159,_0.10)] mr-[32px]">
                <div className="center flex flex-row mt-[21px] mr-0 mb-[22px] ml-[24px] gap-[8px]">
                  <button className="w-[73px] h-[48px] rounded-[24px] text-[#7E88C3] bg-[#F9FAFE] font-[League_Spartan] text-[15px] font-bold leading-[15px] hover:bg-[#DFE3FA] cursor-pointer transition-all duration-300 ease-linear ">
                    Edit
                  </button>
                  <button className="rounded-[24px] bg-[#EC5757] w-[89px] h-[48px] text-[#FFF] font-[League_Spartan] text-[15px] font-bold leading-[15px] hover:bg-[#FF9797] cursor-pointer transition-all duration-300 ease-linear ">
                    Delete
                  </button>
                  <button className="w-[149px] h-[48px] rounded-[24px] bg-[#7C5DFA] text-[#FFF] text-center font-[League_Spartan] text-[15px] font-bold leading-[15px hover:bg-[#9277FF] cursor-pointer transition-all duration-300 ease-linear ">
                    Mark as Paid
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="Payment-Infoo flex justify-start items-center pt-[55px] w-full rounded-[8px] bg-[#FFF] [box-shadow:0px_10px_10px_-10px_rgba(72,_84,_159,_0.10)]">
            <div className="Detals flex justify-center items-center  w-full p-[24px] mb-[60px]  rounded-[8px] bg-[#FFF] [box-shadow:0px_10px_10px_-10px_rgba(72,_84,_159,_0.10)] l:w-full">
              <div className="Location flex flex-col w-full rounded-[8px] bg-[#FFF] [box-shadow:0px_10px_10px_-10px_rgba(72,_84,_159,_0.10)]">
                <div className="div flex justify-between items-center w-full gap  max-sm:flex-col max-sm:items-start">
                  <h2 className="font-[League_Spartan] text-[15px] not-italic font-bold  pb-[3px] leading-[15px] tracking-[-0.25px] mb-[30px] ">
                    #{invoiceById.id}
                    <span className="text-[#7E88C3] font-[League_Spartan] text-[13px] not-italic font-medium leading-[15px] gap-[4px] flex flex-col">
                      {invoiceById.description}
                    </span>
                  </h2>
                  <div className="ewe  text-right   flex flex-col w-fit  max-sm:text-left">
                    <span className="max-w-[127px] flex flex-col text-[#7E88C3] font-[League_Spartan] text-[13px] not-italic font-medium leading-[18px]">
                      {invoiceById.senderAddress.street}
                      <br />
                      {invoiceById.senderAddress.city}
                      <br />
                      {invoiceById.senderAddress.postCode}
                      <br />
                      {invoiceById.senderAddress.country}
                    </span>
                  </div>
                </div>
                <div className="infoDetails flex flex-row justify-between items-start mt-[36px] w-full pr-[32px]">
                  <h2 className=" w-full text-[#7E88C3] font-[League_Spartan] text-[13px] not-italic font-medium leading-[15px] gap-[4px]">
                    Invoice Date
                    <span className=" mt-[13px] text-[#0C0E16] font-[League_Spartan] text-[15px] not-italic font-bold leading-[20px] tracking-[-0.25px] flex flex-col">
                      {invoiceById.createdAt}
                    </span>
                  </h2>
                  <h2 className=" w-full text-[#7E88C3] font-[League_Spartan] text-[13px] not-italic font-medium leading-[15px]">
                    Bill To
                    <span className="mt-[13px] text-[#0C0E16] font-[League_Spartan] text-[15px] not-italic font-bold leading-[20px] tracking-[-0.25px] flex flex-col">
                      {invoiceById.clientName}
                    </span>
                  </h2>
                  <div className="sent  w-full hidden sm:flex  justify-center items-center ">
                    <h2 className=" w-full flex flex-col gap-[13px] text-[#7E88C3] font-[League_Spartan] text-[13px] not-italic font-medium leading-[15px]">
                      Sent to
                      <span className="text-[#0C0E16] font-[League_Spartan] text-[15px] not-italic font-bold leading-[20px]">
                        {invoiceById.clientEmail}
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="flex  flex-row justify-between items-start w-full mt-[7px]  pr-[32px]">
                  <h2 className="mt-[25px] w-full flex flex-col gap-[13px] text-[#7E88C3] font-[League_Spartan] text-[13px] not-italic font-medium leading-[15px]">
                    Payment Due
                    <span className="text-[#0C0E16] font-[League_Spartan] text-[15px] not-italic font-bold leading-[20px]">
                      {invoiceById.paymentDue}
                    </span>
                  </h2>
                  <div className="ewe  text-left   flex flex-col w-full ">
                    <span className="max-w-[127px] flex flex-col text-[#7E88C3] font-[League_Spartan] text-[13px] not-italic font-medium leading-[18px]">
                      {invoiceById.clientAddress.street}
                      <br />
                      {invoiceById.clientAddress.city}
                      <br />
                      {invoiceById.clientAddress.postCode}
                      <br />
                      {invoiceById.clientAddress.country}
                    </span>
                  </div>
                  <div className="div w-full max-sm:hidden"></div>
                </div>
                <div className="sent sm:hidden">
                  <h2 className="mt-[25px] flex flex-col gap-[13px] text-[#7E88C3] font-[League_Spartan] text-[13px] not-italic font-medium leading-[15px]">
                    Sent to
                    <span className="text-[#0C0E16] font-[League_Spartan] text-[15px] not-italic font-bold leading-[20px]">
                      {invoiceById.clientEmail}
                    </span>
                  </h2>
                </div>
                <div className="BIllmobile mt-[50px] ">
                  <div className="BiLL pt-[24px] pr-0 pb-0 pl-[24px]   flex flex-col sm:hidden">
                    {invoiceById.items.map((item, index) => {
                      return (
                        <div className="TOTAL mr-[32px]" key={index}>
                          <div className="bannerdesign flex flex-col">
                            <div className="flex justify-between items-center relative">
                              <h2 className="text-[#0C0E16] font-[League_Spartan] text-[15px] not-italic font-bold leading-[15px]">
                                {item.name}
                              </h2>
                            </div>
                            <div
                              className="mt-[8px] mb-[23px] flex  items-center justify-between w-full
                            ">
                              <span className="text-[#7E88C3] font-[League_Spartan] text-[15px] not-italic font-bold leading-[15px]">
                                {item.quantity} x £{item.price}
                              </span>
                              <span className="text-[#0C0E16] text-right font-[League_Spartan] text-[15px] not-italic font-bold leading-[15px]">
                                £ {item.total}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="BiLL rounded-tl-[8px] rounded-br-none rounded-tr-[8px] rounded-bl-none bg-[#F9FAFE] py-[20px] mt-[50px] px-[45px]">
                  <div className="TOTAL mr-[32px] max-sm:hidden ">
                    <div className="bannerdesign flex flex-col ">
                      <div className="div flex justify-between items-center w-full mb-[32px] text-[#7E88C3] font-[League_Spartan] text-[13px] not-italic font-medium leading-[18px]">
                        <span>Item Name</span>
                        <span>QTY.</span>
                        <span>Price</span>
                        <span>Price</span>
                      </div>
                    </div>
                    {invoiceById.items.map((item, index) => {
                      return (
                        <div
                          className="div w-full flex justify-between"
                          key={index}>
                          <div className="flex justify-between items-center relative w-full  mb-[32px]">
                            <h2 className="text-[#0C0E16] font-[League_Spartan] text-[15px] font-bold leading-[15px]">
                              {item.name}
                            </h2>
                            <span className="text-[#7E88C3] font-[League_Spartan] text-[15px] not-italic font-bold leading-[15px]">
                              {item.quantity}
                            </span>
                            <span className="text-[#7E88C3] text-right font-[League_Spartan] text-[15px] not-italic font-bold leading-[15px]">
                              £ {item.price}
                            </span>
                            <span className="text-[#0C0E16] font-[League_Spartan] text-[15px] font-bold leading-[15px]">
                              {" "}
                              £ {item.total}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="bomboclat flex flex-row justify-between rounded-tl-none rounded-br-[8px] rounded-tr-none rounded-bl-[8px] bg-[#373B53] h-[80px] mt-5 p-4 lg:mt-0">
                  <span className=" ml-[15px] mt-[12px] text-center flex justify-center align-middle text-[#FFF] font-[League_Spartan] text-[13px] font-low leading-[18px] max-sm:hidden">
                    Amount Due
                  </span>
                  <span className=" ml-[15px] mt-[12px] text-center flex justify-center align-middle text-[#FFF] font-[League_Spartan] text-[13px] font-low leading-[18px] sm:hidden ">
                    Grand Total
                  </span>
                  <h2 className="mt-[2px] text-[#FFF] text-right font-[League_Spartan] text-[24px] not-italic font-bold leading-[32px]">
                    £ {invoiceById.total}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {!isDesktop && content}
        </div>
      </div>
    </main>
  );
}

export default Invoice;
