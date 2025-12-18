import React from "react";
import { useCart } from "../context/useCart";
import { AiOutlineClose } from "react-icons/ai";

const EmptyCartModal = () => {
  const { setCartOpen } = useCart();

  return (
    <>
      <div className="fixed md:hidden inset-0 bg-white/5 backdrop-blur-sm" />
      <div
        className="fixed md:hidden left-4 right-4 top-4 bottom-4 rounded-lg z-30 
     p-4 flex flex-col gap-y-4 overflow-hidden bg-secondary text-white "
      >
        <div
          className="h-full flex flex-col items-center
         justify-center gap-y-4 relative"
        >
          <button
            onClick={() => setCartOpen(false)}
            className="absolute top-3 right-2 text-white text-lg
           cursor-pointer hover:text-btn"
          >
            <AiOutlineClose />
          </button>
          <iframe
            className="opacity-65"
            src="https://lottie.host/embed/7c9674fa-5e12-4e3a-934e-dd6fcc74371b/GKL0P7uXXl.lottie"
          ></iframe>
          <span className="text-btn">Empty cart</span>
        </div>
        <button
          onClick={() => setCartOpen(false)}
          className="bg-btn w-full text-white text-[15px] shadow-glow-strong px-4 py-2 rounded-md
        shadow-sm shadow-btn font-medium cursor-pointer"
        >
          Explore More
        </button>
      </div>
    </>
  );
};

export default EmptyCartModal;
