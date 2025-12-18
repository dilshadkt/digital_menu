import React, { useState } from "react";
import { SIDE_BAR_ITEMS } from "../constants";

const MobileNavBar = () => {
  const [acitveMenu, setActiveMenu] = useState(SIDE_BAR_ITEMS[0]);
  return (
    <div className="fixed md:hidden h-20 grid grid-cols-5 bg-white/10 backdrop-blur-md bottom-3 left-3 right-3 rounded-3xl">
      {SIDE_BAR_ITEMS.map((option, index) => {
        const isActive = acitveMenu.id === option.id;
        return (
          <button
            key={index}
            onClick={() => setActiveMenu(option)}
            className={`flex flex-col items-center justify-center
           text-2xl cursor-pointer transition-all duration-200 ${
             isActive ? `text-white -translate-y-1 scale-110 ` : `text-btn    `
           } `}
          >
            {<option.Icon />}
            {isActive && (
              <span className="text-[10px] mt-1">{option.title}</span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default MobileNavBar;
