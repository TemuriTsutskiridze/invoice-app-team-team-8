import EditInvoiceContent from "./EditInvoiceContent";
import AddItemBtn from "../components/AddItemBtn";
import { useState, useEffect } from "react";
export default function EditInvoice({ darkMode }) {
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
    <div>
      <div className="flex flex-col gap-[22px] mt-[26px]">
        <div className="flex">
          <h2 className="text-[24px] font-bold leading-[32px] inline">
            Edit{" "}
            <span className="text-[24px] font-bold leading-[32px] inline text-[#888EB0]">
              #
            </span>{" "}
            {"invoice code"}
          </h2>
        </div>

        <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#7C5DFA]">
          Bill From
        </span>
      </div>
      <EditInvoiceContent darkMode={darkMode} />
      <AddItemBtn darkMode={darkMode} />
      <div className="absolute w-[100%] left-0">
        {windowWidth <= 600 && (
          <div className="bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.00)_0%,_rgba(0,_0,_0,_0.10)_100%)] h-[64px]  w-full"></div>
        )}
      </div>

      <div
        className={`flex gap-[7px] mt-[50px]   h-[91px] items-center  justify-end  sm:px-[56px] ${
          darkMode ? "bg-[#141625]" : ""
        }`}
      >
        <button
          className={`h-[48px] rounded-[24px] bg-[#F9FAFE] text-[#7E88C3] text-[15px] font-bold leading-[15px] tracking-[-0.25px] flex justify-center items-center py-[15px] px-[25px] ${
            darkMode ? "bg-[#252945] " : ""
          }`}
        >
          Cancel
        </button>
        <button className="h-[48px] rounded-[24px] bg-[#7C5DFA] text-[#FFF] text-[15px] font-bold leading-[15px] tracking-[-0.25px] px-[15px]">
          Save Changes
        </button>
      </div>
    </div>
  );
}
