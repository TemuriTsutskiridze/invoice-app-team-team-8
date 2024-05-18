import React from "react";

export default function GoBack({ darkMode }) {
  return (
    <div className="flex gap-[24px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="11"
        viewBox="0 0 6 11"
        fill="none"
      >
        <path
          d="M4.3418 0.885742L0.113895 5.11364L4.3418 9.34155"
          stroke="#7C5DFA"
          strokeWidth="2"
        />
      </svg>
      <span
        className={`text-[15px] font-bold leading-[15px] ${
          darkMode && "text-white"
        }`}
      >
        Go back
      </span>
    </div>
  );
}
