import Arrowleft from "/assets/icon-arrow-left.svg";

function Invoice() {
  return (
    <main className="w-screen flex justify-center flex-col align-center ">
      <div className="w-full h-[72px] bg-black"></div>
      <div className="Container flex justify-center flex-col px-[24px] py-0">
        <div className="Status flex justify-start  align-start gap-[6px] pt-[33px]">
          <img
            src={Arrowleft}
            alt=""
            className="Arrow-left top w-[5px] h-[10px] m-[8px]"
          />
          <span className="font-[League_Spartan] text-[15px] font-bold tracking-[-0.25px]">
            Go back
          </span>
        </div>
        <div className="StatusCheck flex justify-between items-center mt-[68px] ml-[24px]">
          <span className="text-[#858BB2] font-[League_Spartan] text-[13px] font-medium leading-[15px]">
            Status
          </span>
          <ul className="mr-[48px] list-none">
            <li className="text-[#FF8F00] font-[League_Spartan] text-[15px] font-bold leading-[15px] tracking-[-0.25px] relative">
              <span className="before:content-['\2022'] before:text-[#FF8F00] before:mr-[8px]">
                Pending
              </span>
            </li>
          </ul>
        </div>
        <div className="Payment-Infoo flex justify-start items-center pt-[55px]">
          <div className="Detals flex justify-center items-center p-[24px] mb-[60px]">
            <div className="Location flex flex-col">
              <h2 className="font-[League_Spartan] text-[15px] not-italic font-bold leading-[15px] tracking-[-0.25px] mb-[30px]">
                #XM9141
                <span className="text-[#7E88C3] font-[League_Spartan] text-[13px] not-italic font-medium leading-[15px] gap-[4px] flex flex-col">
                  Graphic Design
                </span>
              </h2>
              <div className="container max-w-xs mx-auto">
                <p className="text-[#7E88C3] font-[League_Spartan] text-[13px] font-medium leading-[18px]">
                  19 Union Terrace
                </p>
                <p className="text-[#7E88C3] font-[League_Spartan] text-[13px] font-medium leading-[18px]">
                  London
                </p>
                <p className="text-[#7E88C3] font-[League_Spartan] text-[13px] font-medium leading-[18px]">
                  E1 3EZ
                </p>
                <p className="text-[#7E88C3] font-[League_Spartan] text-[13px] font-medium leading-[18px]">
                  United Kingdom
                </p>
              </div>
              <div className="infoDetails flex flex-row justify-start items-start mt-[36px] gap-[62px]">
                <h2 className="text-[#7E88C3] font-[League_Spartan] text-[13px] not-italic font-medium leading-[15px] gap-[4px]">
                  Invoice Date
                  <span className="mt-[13px] text-[#0C0E16] font-[League_Spartan] text-[15px] not-italic font-bold leading-[20px] tracking-[-0.25px] flex flex-col">
                    21 Aug 2021
                  </span>
                </h2>
                <h2 className="text-[#7E88C3] font-[League_Spartan] text-[13px] not-italic font-medium leading-[15px]">
                  Bill To
                  <span className="mt-[13px] text-[#0C0E16] font-[League_Spartan] text-[15px] not-italic font-bold leading-[20px] tracking-[-0.25px] flex flex-col">
                    Alex Grim
                  </span>
                </h2>
              </div>
              <div className="flex flex-row justify-between items-start mt-[7px] gap-[65px]">
                <h2 className="mt-[25px] flex flex-col gap-[13px] text-[#7E88C3] font-[League_Spartan] text-[13px] not-italic font-medium leading-[15px]">
                  Payment Due
                  <span className="text-[#0C0E16] font-[League_Spartan] text-[15px] not-italic font-bold leading-[20px]">
                    20 Sep 2021
                  </span>
                </h2>
                <div className="ewe max-w-xs mx-auto">
                  <p className="text-[#7E88C3] font-[League_Spartan] text-[13px] font-medium leading-[18px]">
                    19 Union Terrace
                  </p>
                  <p className="text-[#7E88C3] font-[League_Spartan] text-[13px] font-medium leading-[18px]">
                    London
                  </p>
                  <p className="text-[#7E88C3] font-[League_Spartan] text-[13px] font-medium leading-[18px]">
                    E1 3EZ
                  </p>
                  <p className="text-[#7E88C3] font-[League_Spartan] text-[13px] font-medium leading-[18px]">
                    United Kingdom
                  </p>
                </div>
              </div>
              <div className="sent">
                <h2 className="mt-[25px] flex flex-col gap-[13px] text-[#7E88C3] font-[League_Spartan] text-[13px] not-italic font-medium leading-[15px]">
                  Sent to
                  <span className="text-[#0C0E16] font-[League_Spartan] text-[15px] not-italic font-bold leading-[20px]">
                    alexgrim@mail.com
                  </span>
                </h2>
              </div>
              <div className="BiLL pt-[24px] pr-0 pb-0 pl-[24px] mt-[35px] flex flex-col">
                <div className="TOTAL">
                  <div className="bannerdesign flex flex-col">
                    <div className="flex justify-between items-center relative">
                      <h2 className="text-[#0C0E16] font-[League_Spartan] text-[15px] not-italic font-bold leading-[15px]">
                        Banner Design
                      </h2>
                      <span className="text-[#0C0E16] font-[League_Spartan] text-[15px] not-italic font-bold leading-[15px] absolute top-[23px] transform -translate-y-1/2 right-0">
                        £ 156.00
                      </span>
                    </div>
                    <div className="mt-[8px] mb-[23px]">
                      <span className="text-[#7E88C3] font-[League_Spartan] text-[15px] not-italic font-bold leading-[15px]">
                        1 x £ 156.00
                      </span>
                    </div>
                  </div>
                  <div className="emaildesign flex flex-col mb-[23px]">
                    <div className="flex justify-between items-center relative">
                      <h2 className="text-[#0C0E16] font-[League_Spartan] text-[15px] not-italic font-bold leading-[15px]">
                        Email Design
                      </h2>
                      <span className="text-[#0C0E16] font-[League_Spartan] text-[15px] not-italic font-bold leading-[15px] absolute top-[23px] transform -translate-y-1/2 right-0">
                        £ 400.00
                      </span>
                    </div>
                    <div className="mt-[8px]">
                      <span className="text-[#7E88C3] font-[League_Spartan] text-[15px] not-italic font-bold leading-[15px]">
                        2 x £ 200.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" bomboclat  flex flex-row justify-between  rounded-tl-none rounded-br-[8px] rounded-tr-none rounded-bl-[8px] bg-[#373B53] h-[80px] mt-5 p-4">
                <span className=" mt-[12px]  text-center  flex justify-center align-middle text-[#FFF] font-[League_Spartan] text-[13px] not-italic font-low leading-[18px]">
                  Grand Total
                </span>
                <h2 className=" mt-[2px] text-[#FFF] text-right font-[League_Spartan] text-[24px] not-italic font-bold leading-[32px]">
                  £ 556.00
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-centeter  flex-shrink-0 bg-[#FFF] [box-shadow:0px_10px_10px_-10px_rgba(72,_84,_159,_0.10)]">
        <div className="center flex flex-row mt-[21px] mr-0 mb-[22px] ml-[24px] gap-[8px]">
          <button className=" w-[73px] h-[48px] rounded-[24px] text-[#7E88C3]  bg-[#F9FAFE] font-[League_Spartan] text-[15px] not-italic font-bold leading-[15px]">Edit</button>
          <button className="rounded-[24px] bg-[#EC5757] w-[89px] h-[48px] text-[#FFF] font-[League_Spartan] text-[15px] not-italic font-bold leading-[15px]">Delete</button>
          <button className="w-[149px] h-[48px] rounded-[24px] bg-[#7C5DFA] text-[#FFF] text-center font-[League_Spartan] text-[15px] not-italic font-bold leading-[15px]">Mark as Paid</button>
        </div>
      </div>
    </main>
  );
}

export default Invoice;
