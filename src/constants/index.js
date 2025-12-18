import Home from "../assets/svg/home.svg?react";
import Coupons from "../assets/svg/coupons.svg?react";
import Wishlist from "../assets/svg/whishlist.svg?react";
import Mails from "../assets/svg/email.svg?react";
import Notifications from "../assets/svg/notifications.svg?react";

import DummyImages from "../assets/images/food1.png";

// Side bar items
export const SIDE_BAR_ITEMS = [
  {
    title: "Home",
    path: "/",
    id: 1,
    Icon: Home,
  },
  {
    title: "Coupons",
    path: "/#coupons",
    id: 2,
    Icon: Coupons,
  },
  {
    title: "Whishlist",
    path: "/#whishlist",
    id: 3,
    Icon: Wishlist,
  },
  {
    title: "Mails",
    path: "/#mails",
    id: 4,
    Icon: Mails,
  },
  {
    title: "Notifications",
    path: "/",
    id: 5,
    Icon: Notifications,
  },
];


// Dummy category list
export const DUMMY_CATEGORY = ["All", "Noodles", "Rice", "Instant Food"];

export const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Healthy noodle with spinach leaf",
    currency: "AED",
    stock: 22,
    sizes: ["S", "M", "L"],
    category: "Noodles",
    imageType: "noodles",
    image: DummyImages,
    orderType: ["DINE_IN", "TAKEAWAY"],

    pricing: {
      S: { price: 3.29, oldPrice: 3.78 },
      M: { price: 4.29, oldPrice: 4.78 },
      L: { price: 5.29, oldPrice: 5.78 },
    },
  },
  {
    id: 2,
    name: "Hot spicy fried rice with omelet",
    currency: "AED",
    stock: 13,
    sizes: ["S", "M", "L"],
    category: "Rice",
    imageType: "fried-rice",
    image: DummyImages,
    orderType: ["DINE_IN", "TAKEAWAY", "DELIVERY"],

    pricing: {
      S: { price: 3.29, oldPrice: 3.78 },
      M: { price: 4.29, oldPrice: 4.78 },
      L: { price: 5.29, oldPrice: 5.78 },
    },
  },
  {
    id: 3,
    name: "Spicy instant noodle with special omelette",
    price: 3.29,
    oldPrice: 3.29,
    currency: "AED",
    stock: 17,
    sizes: [],
    pricing: null,
    category: "Instant Food",
    imageType: "instant-noodles",
    image: DummyImages,
    orderType: ["TAKEAWAY", "DELIVERY"],
  },
  {
    id: 4,
    name: "Healthy noodle with spinach leaf",
    price: 25.0,
    currency: "AED",
    stock: 22,
    sizes: [],
    pricing: null,
    category: "Noodles",
    imageType: "noodles",
    image: DummyImages,
    orderType: ["DINE_IN"],
  },
  {
    id: 5,
    name: "Hot spicy fried rice with omelet",
    currency: "AED",
    stock: 13,
    sizes: ["S", "M", "L"],
    category: "Rice",
    imageType: "fried-rice",
    image: DummyImages,
    orderType: ["DINE_IN", "TAKEAWAY"],

    pricing: {
      S: { price: 3.29, oldPrice: 3.78 },
      M: { price: 4.29, oldPrice: 4.78 },
      L: { price: 5.29, oldPrice: 5.78 },
    },
  },
  {
    id: 6,
    name: "Spicy instant noodle with special omelette",
    currency: "AED",
    stock: 17,
    sizes: ["S", "M", "L"],
    category: "Instant Food",
    imageType: "instant-noodles",
    image: DummyImages,
    orderType: ["DELIVERY"],

    pricing: {
      S: { price: 3.29, oldPrice: 3.78 },
      M: { price: 4.29, oldPrice: 4.78 },
      L: { price: 5.29, oldPrice: 5.78 },
    },
  },
];

  export const ORDER_TYPES = [
    { label: "All", value: "All" },
    { label: "Dine In", value: "DINE_IN" },
    { label: "Take Away", value: "TAKEAWAY" },
    { label: "Delivery", value: "DELIVERY" },
  ];
