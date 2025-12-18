import React from "react";
import Trash from "../../assets/svg/trash.svg?react";
import { useCart } from "../../context/useCart";
const CartItems = ({ product }) => {
  const { removeFromCart } = useCart();

  const totalAmount = product?.price * product?.quantity;
  return (
    <div className="flex flex-col gap-y-3 py-2">
      <div className="grid grid-cols-6">
        <div className="col-span-4 flex items-center gap-x-2">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-600">
            <img
              src={product?.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col ">
            <span className="text-sm">
              {product?.name?.length > 25
                ? product?.name.slice(0, 25) + "..."
                : product?.name}
            </span>
            <div>
              <span className="text-white/60 text-[13px]">
                AED {product?.price}
              </span>
              {product?.size && (
                <span
                  className="text-xs border rounded-full border-gray-500/80 bg-primary
              ml-2 px-1 text-btn py-0.5 "
                >
                  {product?.size}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-end">
          <div
            className="text-sm bg-[#2d303e] rounded-lg w-9 h-9 
        flex items-center border border-[#393c49] justify-center"
          >
            {product?.quantity}
          </div>
        </div>
        <span className="text-sm text-white/80 h-full  flex items-center justify-end">
          {Number(totalAmount).toFixed(2)}
        </span>
      </div>
      <div className="grid grid-cols-6">
        <div
          className="col-span-5 bg-[#2d303e] border
       border-[#393c49] rounded-lg h-9 flex items-center justify-center"
        >
          <input
            className="text-[13px] w-full px-3 h-full outline-none"
            type="text"
            placeholder="Please, just a little bit spicy only."
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            onClick={() =>
              removeFromCart(product, product.size, product.orderType)
            }
            className="border-2 px-2 rounded-md border-[#ff7ca3]/70 py-2"
          >
            <Trash className="w-4 h-4 cursor-pointer text-white/60" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
