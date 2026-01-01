import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import { SIDE_BAR_ITEMS } from "../constants";
import Logout from "../assets/svg/logout.svg?react";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <section
        className="bg-secondary  w-24 py-6 rounded-r-2xl 
      hidden  md:flex flex-col items-center"
      >
        <Link to="/">
          <img src={logo} alt="" className="w-14 h-14 " />
        </Link>
        <div className="flex flex-col w-full h-full mt-6 justify-between">
          <div className="flex w-full pl-2  gap-y-1  flex-col ">
            {SIDE_BAR_ITEMS.map((menu, index) => {
              const isActive = activeTab === index;
              return (
                <Link
                  // to={menu.path}
                  key={index}
                  className={`w-full h-20  cursor-pointer  ${
                    isActive ? "bg-primary rounded-l-2xl" : ""
                  } flex items-center justify-center relative`}
                  onClick={() => setActiveTab(index)}
                >
                  <div
                    className={`w-[65%] h-[65%] rounded-lg flex items-center justify-center
    transition-all duration-300
    ${isActive ? "bg-btn shadow-glow-strong" : "bg-secondary shadow-secondary"}
  `}
                  >
                    <menu.Icon
                      className={`w-6 h-6 transition-all duration-300
      ${isActive ? "text-white" : "text-btn"}
    `}
                    />
                  </div>

                  {/* top cutting for the curve  */}
                  {isActive && (
                    <>
                      <span className="absolute w-4 h-4 bg-secondary z-10 -top-4 right-0 rounded-br-2xl"></span>
                      <span className="absolute w-4 h-4 bg-primary -top-4 right-0 "></span>
                    </>
                  )}
                  {/* bottom cutting for the curve  */}
                  {isActive && (
                    <>
                      <span className="absolute transition-all duration-300 w-4 h-4 bg-secondary z-10 -bottom-4 right-0 rounded-tr-2xl"></span>
                      <span className="absolute transition-all duration-300 w-4 h-4 bg-primary -bottom-4 right-0 "></span>
                    </>
                  )}
                </Link>
              );
            })}
          </div>
          <button className="w-full h-20  cursor-pointer  flex items-center justify-center">
            <Logout className="w-6 h-6 cursor-pointer text-btn hover:text-white " />
          </button>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
