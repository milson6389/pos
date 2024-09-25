import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  carts: JSON.parse(localStorage.getItem("carts")) || [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const cartItem = {
        id: +new Date(),
        item_id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        quantity: 1,
      };

      const existingItem = current(state.carts).findIndex(
        (item) => item.item_id == action.payload.id
      );

      if (existingItem < 0) {
        state.carts.push(cartItem);
        localStorage.setItem("carts", JSON.stringify(current(state.carts)));
      }
    },
    updateCartItem: (state, action) => {
      let existing = current(state.carts).find(
        (item) => Number(item.item_id) === Number(action.payload.id)
      );
      state.carts = current(state.carts).filter(
        (x) => Number(x.item_id) !== Number(action.payload.id)
      );
      existing = {
        ...existing,
        quantity: existing.quantity + Number(action.payload.qty),
      };

      if (existing.quantity > 0) {
        state.carts.push(existing);
      }
      state.carts = state.carts.sort((a, b) => a.id - b.id);
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    deleteCartItem: (state, action) => {
      state.carts = current(state.carts).filter(
        (x) => Number(x.item_id) !== Number(action.payload.id)
      );
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    clearCart: (state, action) => {
      state.carts = [];
      localStorage.removeItem("carts");
    },
  },
});

export const { addCartItem, updateCartItem, deleteCartItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
