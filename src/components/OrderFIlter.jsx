import { useState, useRef, useEffect } from "react";
import arrowDown from "../assets/svg/arrowDown.svg";
import { useProduct } from "../context/useProduct";
import { ORDER_TYPES } from "../constants";

const OrderTypeFilter = () => {
  const { orderType, setOrderType } = useProduct();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative min-w-[150px]">
      {/* Trigger */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="border rounded-lg border-slate-600/60
        cursor-pointer flex items-center justify-between gap-x-3
        text-xs md:text-sm bg-secondary py-1.5 md:py-2.5
        px-3 md:px-5"
      >
        <span>{ORDER_TYPES.find((o) => o.value === orderType)?.label}</span>
        <img
          src={arrowDown}
          alt=""
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute top-full left-0 mt-2 w-full
          bg-secondary border border-slate-600/60
          rounded-lg overflow-hidden z-20"
        >
          {ORDER_TYPES.map((type) => (
            <div
              key={type.value}
              onClick={() => {
                setOrderType(type.value);
                setOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer text-xs md:text-sm
              hover:bg-btn/20 ${
                orderType === type.value ? "text-btn" : "text-white/80"
              }`}
            >
              {type.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderTypeFilter;
