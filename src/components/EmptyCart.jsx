import React from "react";
import { useCart } from "../context/useCart";

const EmptyCart = () => {
  const { setCartOpen } = useCart();
  return (
    <section
      className={`bg-secondary hidden  md:flex flex-col gap-y-4 text-white w-full h-full max-w-[390px] p-4`}
    >
      <div className="w-full flex flex-col h-full gap-x-2">
        <div className="h-full flex flex-col gap-y-6 items-center justify-center">
          <iframe
            className="w-80 scale-125 opacity-45"
            src="https://lottie.host/embed/7c9674fa-5e12-4e3a-934e-dd6fcc74371b/GKL0P7uXXl.lottie"
          ></iframe>
          <span className="text-btn/70">Cart is empty</span>
        </div>
        <button
          onClick={() => setCartOpen(false)}
          className="bg-btn w-full text-white text-[15px] shadow-glow-strong px-4 py-2 rounded-md
        shadow-sm shadow-btn font-medium cursor-pointer"
        >
          Explore More
        </button>
      </div>
    </section>
  );
};

export default EmptyCart;
