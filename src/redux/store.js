import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // استيراد الـ reducer الخاص بالسلة

export const store = configureStore({
  reducer: {
    cart: cartReducer, // هنا نربط الـ reducer بالـ store
  },
});
