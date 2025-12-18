import React, { useMemo, useState } from "react";
import { useCart } from "../../context/useCart";
import { useProduct } from "../../context/useProduct";

const ListCard = ({ food }) => {
  const { addToCart, cartItems } = useCart();
  const { orderType } = useProduct();

  const hasSizes = food.sizes && food.sizes.length > 0;
  const [activeOption, setActiveOption] = useState(
    hasSizes ? food.sizes[0] : null
  );

  // Get price based on selected size
  const { price, oldPrice } = useMemo(() => {
    if (hasSizes && food.pricing && activeOption) {
      return food.pricing[activeOption];
    }

    return {
      price: food.price,
      oldPrice: food.oldPrice,
    };
  }, [food, activeOption, hasSizes]);

  const isInCart = cartItems.find(
    (item) =>
      item.productId === food.id &&
      item.size === activeOption &&
      item.orderType === orderType
  );

  return (
    <div className="bg-[#1f1d2b] mt-10 flex flex-col items-center rounded-xl p-3 max-h-[350px]">
      <div className="min-h-[80px] md:min-h-[110px] w-full relative">
        <div
          className="w-30 md:w-36 h-30 md:h-36 rounded-full
          bg-gray-500 absolute left-0 right-0 bottom-3 mx-auto"
        >
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-full object-cover scale-110"
          />
        </div>
      </div>

      <div className="md:w-[90%] lg:w-[80%] flex gap-y-2 flex-col items-center">
        <span className="text-center text-[13px] md:text-[15px]">
          {food.name.length > 50 ? food.name.slice(0, 50) + "..." : food.name}
        </span>

        {/* Price */}
        <div className="flex items-center gap-x-2 text-sm">
          {oldPrice && oldPrice > price && (
            <span className="text-[#b7312e] line-through">{oldPrice} AED</span>
          )}
          <span className="text-[#34c759]/80">{price} AED</span>
        </div>

        <p className="text-[#abbbc2] text-sm">{food.stock} Bowls available</p>

        {/*Size options */}
        {hasSizes ? (
          <div className="flex gap-2 items-center py-3 justify-center flex-wrap">
            {food.sizes.map((option) => (
              <button
                key={option}
                onClick={() => setActiveOption(option)}
                className={`${
                  activeOption === option ? "bg-btn" : "bg-transparent"
                } text-white px-3 py-2 text-xs cursor-pointer rounded-md`}
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex gap-2 opacity-30 items-center py-3 justify-center flex-wrap">
            {["S", "M", "L"].map((option) => (
              <button
                key={option}
                className={`bg-gray-700 text-white px-3 py-2 text-xs cursor-not-allowed
                   rounded-md`}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        <button
          onClick={() => addToCart(food, { size: activeOption, orderType })}
          className={`text-sm w-full ${
            isInCart ? `bg-btn` : `bg-primary`
          }  px-5 py-2 rounded-lg `}
        >
          {!isInCart ? (
            "Add"
          ) : (
            <span className="relative">
              <span
                className="w-6 h-6 text-center   -left-2
                absolute -translate-x-5 flex items-center justify-center
                 bg-white/80 rounded-full top-0 bottom-0 my-auto
                 text-black text-xs font-medium"
              >
                {isInCart?.quantity}
              </span>
              in Cart
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ListCard;
