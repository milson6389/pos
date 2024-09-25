import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Macbook Air M3 Pro",
      image:
        "https://cdnpro.eraspace.com/media/catalog/product/a/p/apple_macbook_air_13_inci_m3_2024_midnight_1.jpg",
      price: 10,
    },
    {
      id: 2,
      name: "IPhone 15 Pro",
      image:
        "https://cworld.id/wp-content/uploads/2023/10/ID_iPhone_15_Pro_Black_Titanium_PDP_Image_Position-1A_Black_Titanium_Color-scaled.jpg",
      price: 8,
    },
  ],
};

export const posSlice = createSlice({
  name: "pos",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = {
        id: +new Date(),
        name: action.payload.name,
        image: action.payload.image,
        price: action.payload.price,
      };
      state.items.push(item);
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[index].name = action.payload.name;
      state.items[index].image = action.payload.image;
      state.items[index].price = action.payload.price;
    },
    deleteItem: (state, action) => {
      return state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, searchItem, updateItem, deleteItem } = posSlice.actions;
export default posSlice.reducer;
