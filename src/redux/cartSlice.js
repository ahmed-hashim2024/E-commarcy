import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // مصفوفة لتخزين المنتجات في السلة
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Reducer لإضافة منتج إلى السلة
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        // إذا كان المنتج موجودًا بالفعل، قم بزيادة الكمية فقط
        existItem.quantity += 1;
      } else {
        // إذا لم يكن موجودًا، أضفه إلى السلة بكمية 1
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },

    // Reducer لحذف منتج من السلة
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== itemId);
    },

    // Reducer لزيادة الكمية
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((x) => x.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    // Reducer لتقليل الكمية
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((x) => x.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        // إذا كانت الكمية 1، قم بحذف المنتج عند التقليل
        state.cartItems = state.cartItems.filter(
          (x) => x.id !== action.payload
        );
      }
    },
  },
});

// تصدير الإجراءات (Actions)
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

// تصدير الـ Reducer
export default cartSlice.reducer;
