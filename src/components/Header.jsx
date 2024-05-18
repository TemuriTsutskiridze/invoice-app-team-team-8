import React, { useCallback, useState } from "react";
import Avatar from "/assets/image-avatar.jpg";
import Moon from "/assets/icon-moon.svg";
import Sun from "/assets/icon-sun.svg";
export default function Header() {
  const [isSun, setIsSun] = useState(false);

  return (
    <>
      <svg
        className="absolute rounded-br-[15px]"
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
      >
        <path
          d="M0 0H52C63.0457 0 72 8.95431 72 20V52C72 63.0457 63.0457 72 52 72H0V0Z"
          fill="#7C5DFA"
        />

        <g mask="url(#mask0_1_411)">
          <path
            d="M72 36.3496H20C8.95431 36.3496 0 45.3039 0 56.3496V88.3496C0 99.3953 8.95431 108.35 20 108.35H72V36.3496Z"
            fill="#9277FF"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.486 23L36 35.8992L42.514 23C46.9652 25.3089 50 29.9102 50 35.2097C50 42.8258 43.732 48.9999 36 48.9999C28.268 48.9999 22 42.8258 22 35.2097C22 29.9102 25.0348 25.3089 29.486 23Z"
          fill="white"
        />
      </svg>
      <header className="h-[72px] bg-[#373B53] flex w-full  justify-end items-center ">
        <div className="cursor-pointer" onClick={() => setIsSun(!isSun)}>
          <img
            src={isSun ? Sun : Moon}
            alt="moon"
            className="mr-[24px] cursor-pointer"
          />
        </div>

        <div className="h-full  bg-[#494E6E] w-[1px]"></div>
        <div className="  flex justify-center items-center w-[80px] h-full">
          <img
            src={Avatar}
            alt="avatar"
            className="w-[32px] h-[32px] rounded-[32px]"
          />
        </div>
      </header>
    </>
  );
}
