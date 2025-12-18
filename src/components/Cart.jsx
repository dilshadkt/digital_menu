import React, { useMemo, useState } from "react";
import { useCart } from "../context/useCart";
import CartItems from "./shared/CartItems";
import CartHeader from "./CartHeader";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { isCartOpen, cartItems, clearCart, totalAmount } = useCart();
  const [orderType, setOrderType] = useState("All");

  const filteredCartItems = useMemo(() => {
    if (orderType === "All") return cartItems;

    return cartItems.filter((item) => item.orderType === orderType);
  }, [orderType, cartItems]);

  const isCartEmpty = cartItems?.length > 0;

  // close cart if it is not open
  if (!isCartOpen) return null;

  if (!isCartEmpty) {
    return <EmptyCart />;
  }

  return (
    <section
      className={`bg-secondary hidden  md:flex flex-col gap-y-4 text-white w-full h-full max-w-[390px] p-4`}
    >
      <CartHeader option={orderType} setOption={setOrderType} />
      <div
        className="h-full border-t pt-2 border-[#393c49] flex flex-col gap-y-3
       overflow-y-auto hide-scrollbar"
      >
        {filteredCartItems.map((item) => (
          <CartItems key={item.productId} product={item} />
        ))}
      </div>
      <div className="w-full flex flex-col  gap-y-2">
        <div className="flex items-center justify-between">
          <span>Total</span>
          <span>{Number(totalAmount).toFixed(2)} AED</span>
        </div>
        <div className="flex items-center gap-x-2">
          <button
            className="bg-btn w-full text-white text-[15px] shadow-glow-strong px-4 py-2 rounded-md
          shadow-sm shadow-btn font-medium cursor-pointer"
          >
            Order Now
          </button>
          {isCartEmpty && (
            <button
              onClick={() => clearCart()}
              className="bg-primary border border-btn/60 whitespace-nowrap  
            text-[15px]  px-8 py-2 rounded-md text-btn cursor-pointer
            shadow-sm  font-medium"
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
