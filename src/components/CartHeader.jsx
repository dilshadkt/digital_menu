import React, { useState } from "react";
import { ORDER_TYPES } from "../constants";

const CartHeader = ({ option, setOption }) => {
  return (
    <>
      <span className="  font-semibold">Orders #34562</span>
      <div className="flex items-center gap-x-1 ">
        {ORDER_TYPES.map((item, index) => (
          <button
            className={`bg-btn rounded-md text-sm px-4 py-1 cursor-pointer text-white ${
              option === item.value ? "bg-btn" : "bg-secondary"
            }`}
            key={index}
            onClick={() => setOption(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-6 text-sm mt font-medium ">
        <span className="col-span-4">Item</span>
        <span className="text-end">Qty</span>
        <span className="text-end">Price</span>
      </div>
    </>
  );
};

export default CartHeader;
