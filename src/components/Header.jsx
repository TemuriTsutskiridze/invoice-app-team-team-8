import React from "react";
import Avatar from "/assets/image-avatar.jpg";
export default function Header() {
  return (
    <header className="h-[72px] bg-[#373B53] flex w-full pl-[24px] ">
      <div>
        <div className="w-px h-[72px] bg-[#494E6E]"></div>

        <img src={Avatar} alt="avatar" />
      </div>
    </header>
  );
}
