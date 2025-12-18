import React from "react";
import { Link } from "react-router-dom";
import homeBanner from "../../assets/images/home.png";
import logo from "../../assets/images/logo.png";
const HomePage = () => {
  return (
    <main className="h-screen font-inter flex items-center justify-center relative bg-black">
      <img
        src={homeBanner}
        alt=""
        className="w-full h-full object-cover absolute opacity-30"
      />
      <div className="max-w-md px-3 md:px-5 w-full relative z-10 text-white/80 flex items-center flex-col gap-y-4">
        <div className="w-[200px] h-[200px] rounded-full bg-white/10 backdrop-blur-sm">
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col mt-7 gap-y-2 items-start md:items-center ">
          <h4
            className="
     text-2xl md:text-3xl font-semibold
    bg-gradient-to-b from-white via-white/90 to-slate-400
    bg-clip-text text-transparent
  "
          >
            Welcome to Chef Kitchen
          </h4>
          <p className="text-sm md:text-base ">
            Check out the awesome food experience! It's super fresh, quick, and
            oh-so tasty!
          </p>
        </div>
        <Link
          to={"/lists"}
          className="text-white bg-btn px-10 py-2 
        text-center   text-sm md:text-base font-medium rounded-lg w-full"
        >
          Explore Menu
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
