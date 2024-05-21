/* eslint-disable react/prop-types */
export default function CardMobile({ invoice }) {
  const getStatusColor = () => {
    switch (invoice.status.name.toLowerCase()) {
      case "pending":
        return "#FF8F00";
      case "paid":
        return "#33D69F";
      default:
        return "#373B53";
    }
  };

  const statusColor = getStatusColor();

  return (
    <div className="Container justify-between  w-full  hidden max-sm:block">
      <div className="card flex w-full flex-row justify-between">
        <div className="div flex flex-row justify-between  gap-2 w-full">
          <div className="left-section flex flex-col  gap-2 w-full ">
            <span className="text-[#000000] font-[League_Spartan] text-[15px] font-bold leading-[15px] tracking-[-0.25px] mb-[20px]">
              <span className="text-[#7E88C3]">#</span>
              {invoice.id}
            </span>
            <span className="paymentdue text-[#7E88C3] font-[League_Spartan] text-[13px] not-italic font-medium leading-[15px] tracking-[-0.1px]">
              {invoice.paymentDue}
            </span>
            <span className="total text-[#0C0E16] font-[League_Spartan] text-[15px] font-bold leading-[24px]">
              £ {invoice.total}
            </span>
          </div>
          <div className="right-section flex flex-col justify-between  gap-2 h-full">
            <span className="text-[#888EB0] font-[League_Spartan] text-[13px] not-italic font-medium leading-[15px]">
              {invoice.clientName}
            </span>
            <div className="paymentid flex items-center gap-1">
              <ul className="mr-[48px] list-none relative w-[104px] h-[40px] flex items-center justify-center px-[10px]">
                <div
                  className="div absolute rounded-[6px] opacity-[0.0571] top-0 left-0 flex-shrink-0 h-full w-full z-[10]"
                  style={{ backgroundColor: statusColor }}></div>
                <li
                  className="flex h-full items-center gap-2 font-[League_Spartan] text-[15px] font-bold leading-[15px] tracking-[-0.25px] relative"
                  style={{ color: statusColor }}>
                  <div
                    className="div translate-y-0.5 h-[8px] w-[8px] rounded-full"
                    style={{ backgroundColor: statusColor }}></div>
                  <span>{invoice.status.name}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
