/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types
export default function Card({ invoice }) {
  function checkStatus() {
    if (invoice.status === "pending") {
      return "#FF8F00";
    } else if (invoice.status === "paid") {
      return "#33D69F";
    } else {
      return "#373B53";
    }
  }
  console.log(invoice);
  return (
    <div className="container w-full flex justify-center items-center ">
      <div
        className="cards  flex flex-row justify-between items-center rounded-[8px] bg-[#FFF] [box-shadow:0px_10px_10px_-10px_rgba(72,_84,_159,_0.10)] w-[730px]
        h-[72px]">
        <span className="text-[#000000] font-[League_Spartan] text-[15px] not-italic font-bold leading-[15px] tracking-[-0.25px]">
          #{invoice.id}
        </span>
        <span className="text-[#888EB0] font-[League_Spartan] text-[13px] not-italic font-medium leading-[15px]">
          {invoice.paymentDue}
        </span>
        <span className="text-[#888EB0] font-[League_Spartan] text-[13px] not-italic font-medium leading-[15px]">
          {invoice.clientName}
        </span>
        <span className="text-[#0C0E16] text-right font-[League_Spartan] text-[15px] not-italic font-bold leading-[24px]">
          £ {invoice.total}
        </span>
        <ul className="mr-[48px] list-none relative w-[104px] h-[40px]  flex items-center justify-center w-[104px] h-[40px] px-[10px]">
          <div
            className={`div absolute rounded-[6px] opacity-[0.0571]  top-0 left-0   flex-shrink-0  h-full w-full    z-[10]  `}
            style={{ backgroundColor: checkStatus() }}></div>
          <li
            className={`flex h-full items-center gap-2  font-[League_Spartan] text-[15px] font-bold leading-[15px] tracking-[-0.25px] relative `}
            style={{ color: checkStatus() }}>
            <div
              className={`div translate-y-0.5 h-[8px] w-[8px]  rounded-full `}
              style={{ backgroundColor: checkStatus() }}></div>
            <span className={``}>{invoice.status}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
