import React, { useEffect } from "react";
import EditInvoiceContent from "./EditInvoiceContent";
import AddItemBtn from "../components/AddItemBtn";
export default function EditInvoice() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleGradient = () => {
    if (windowWidth <= 400) {
      return (
        <div className="bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.00)_0%,_rgba(0,_0,_0,_0.10)_100%)] h-[64px] w-full sticky"></div>
      );
    }
    return null;
  };

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
      <EditInvoiceContent />
      <AddItemBtn />
      {handleGrandient()}
      <div className="flex  mt-[21px] sm:mt-[47px] bg-white  w-full justify-end gap-[7px]">
        <button className="h-[48px] rounded-[24px] bg-[#F9FAFE] text-[#7E88C3] text-[15px] font-bold leading-[15px] tracking-[-0.25px] flex justify-center items-center py-[15px] px-[25px]">
          Cancel
        </button>
        <button className="h-[48px] rounded-[24px] bg-[#7C5DFA] text-[#FFF] text-[15px] font-bold leading-[15px] tracking-[-0.25px] px-[15px]">
          Save Changes
        </button>
      </div>
    </div>
  );
}
