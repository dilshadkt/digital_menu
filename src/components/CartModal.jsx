import React, { useState } from "react";
import CartItems from "./shared/CartItems";
import { AiOutlineClose } from "react-icons/ai";
import CartHeader from "./CartHeader";
import { useCart } from "../context/useCart";
import EmptyCartModal from "./EmptyCartModal";

const CartModal = () => {
  const { isCartOpen, setCartOpen, cartItems } = useCart();
  const [orderType, setOrderType] = useState("All");

  const isCartEmpty = cartItems?.length > 0;

  if (!isCartOpen) return null;
  if (!isCartEmpty) {
    return <EmptyCartModal />;
  }

  return (
    <>
      <div className="fixed md:hidden inset-0 bg-white/5 backdrop-blur-sm" />
      <div
        className="fixed md:hidden left-4 right-4 top-4 bottom-4 rounded-lg z-30 
       p-4 flex flex-col gap-y-4 overflow-hidden bg-secondary text-white "
      >
        <div className="flex flex-col gap-y-4 relative">
          <CartHeader option={orderType} setOption={setOrderType} />
          {/* cancle button  */}
          <button
            onClick={() => setCartOpen(!isCartOpen)}
            className="absolute top-3 right-2 text-white text-lg
           cursor-pointer hover:text-btn"
          >
            <AiOutlineClose />
          </button>
        </div>
        <div
          className="h-full border-t pt-2 border-[#393c49] flex flex-col gap-y-3
       overflow-y-auto hide-scrollbar"
        >
          {cartItems.map((item, index) => (
            <CartItems key={index} product={item} />
          ))}
        </div>
        <button
          className="bg-btn text-white text-[15px] shadow-glow-strong px-4 py-2 rounded-md
      shadow-sm shadow-btn font-medium"
        >
          Order Now
        </button>
      </div>
    </>
  );
};

export default CartModal;
