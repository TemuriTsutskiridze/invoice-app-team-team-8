import data from "../data.json";
import Card from "../Components/Card";
export default function Invoices() {
  console.log(data);
  return (
    <div className="flex justify-center items-center mt-[100px]">
      <div className="container flex flex-col justify-center items-center w-[730px]">
        <div className="dvi flex flex-row justify-between items-center w-full mb-[50px]  ">
          <div className="total flex flex-row justify-center items-center ">
            <h2 className="text-[#0C0E16] font-[League_Spartan] text-[36px] not-italic font-bold leading-[normal] tracking-[-1.125px] flex flex-col">
              Invoices{" "}
              <span className="text-[#888EB0] font-[League_Spartan] text-[13px] not-italic font-medium leading-[15px]">
                There are 7 total invoices
              </span>
            </h2>
          </div>
          <div className="filter flex flex-row justify-center items-center gap-5 ">
            <div className="filter ">
              <h2 className="flex flex-row items-center justify-center gap-[14px] text-[#0C0E16] font-[League_Spartan] text-[15px] not-italic font-bold leading-[15px]">
                Filter by status
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none">
                  <path
                    d="M1 1L5.2279 5.2279L9.4558 1"
                    stroke="#7C5DFA"
                    strokeWidth="2"
                  />
                </svg>
              </h2>
            </div>

            <button className="flex flex-row justify-center items-center w-[150px] h-[48px] rounded-[24px] gap-3 bg-[#7C5DFA] text-[#FFF] font-[League_Spartan] text-[15px] not-italic font-bold leading-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none">
                <circle cx="16" cy="16" r="16" fill="white" />
                <path
                  d="M17.3131 21.0229V17.3131H21.0229V14.7328H17.3131V11.0229H14.7328V14.7328H11.0229V17.3131H14.7328V21.0229H17.3131Z"
                  fill="#7C5DFA"
                />
              </svg>
              New Invoice
            </button>
          </div>
        </div>
        <div className="div flex w-full justify-center items-center flex-wrap gap-[5px]">
          {data.map((id, idx) => {
            return <Card key={idx} invoice={id} />;
          })}
        </div>
      </div>
    </div>
  );
}
