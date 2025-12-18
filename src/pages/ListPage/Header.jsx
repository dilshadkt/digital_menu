import React from "react";
import searchIcon from "../../assets/svg/search.svg";
import { MdShoppingCart } from "react-icons/md";
import { useCart } from "../../context/useCart";
import { useProduct } from "../../context/useProduct";

const Header = () => {
  const { isCartOpen, setCartOpen, cartItems } = useCart();
  const { search, setSearch } = useProduct();

  const cartCount = cartItems.length || "";

  return (
    <div className="flex items-start flex-col gap-y-2 md:flex-row justify-between">
      <div className="flex flex-row justify-between w-full md:flex-col gap-y-1 text-white">
        <h3 className=" md:text-3xl font-semibold">Chef Kitchen</h3>
        <span className="text-sm text-slate-400">Tuesday, 2 March 2024</span>
      </div>
      <div className="flex items-center w-full md:w-fit justify-between md:justify-start gap-x-3">
        <div className="border-2 w-full relative rounded-lg bg-[#2d303e] border-slate-600/60">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="p-3 placeholder-[#abbbc2] outline-none pl-10 text-xs md:text-sm"
            placeholder="Search for food, coffe, etc.."
          />
          <img
            src={searchIcon}
            alt=""
            className="w-5 h-5 absolute top-0 bottom-0 my-auto left-3 m-auto"
          />
        </div>
        <button
          className=" text-2xl md:text-3xl cursor-pointer hover:text-btn text-white/60 relative"
          onClick={() => setCartOpen(!isCartOpen)}
        >
          <MdShoppingCart />
          {cartCount && (
            <span
              className="cursor-alias min-w-4 px-1.5 py-0.5 min-h-4 rounded-full bg-btn
         absolute -top-3 -right-1 md:-right-3  text-white text-xs font-medium"
            >
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
