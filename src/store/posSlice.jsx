import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("items")) || [],
};

export const posSlice = createSlice({
  name: "pos",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let id = 1;
      let arrSize = current(state.items).length;
      if (arrSize > 0) {
        id = Number(current(state.items)[arrSize - 1].id) + 1;
      }

      const item = {
        id: id,
        name: action.payload.name,
        image: action.payload.image,
        price: action.payload.price,
      };
      state.items.push(item);
      localStorage.setItem("items", JSON.stringify(current(state.items)));
    },
    updateItem: (state, action) => {
      let existing = current(state.items).find(
        (item) => Number(item.id) === Number(action.payload.id)
      );
      state.items = current(state.items).filter(
        (x) => x.id !== Number(action.payload.id)
      );
      existing = {
        ...existing,
        name: action.payload.name,
        image: action.payload.image,
        price: action.payload.price,
      };
      state.items.push(existing);
      state.items = state.items.sort((a, b) => a.id - b.id);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    deleteItem: (state, action) => {
      state.items = current(state.items).filter(
        (x) => x.id !== Number(action.payload.id)
      );
      localStorage.setItem("items", JSON.stringify(state.items));
    },
  },
});

export const { addItem, updateItem, deleteItem } = posSlice.actions;
export default posSlice.reducer;
