import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
        // mutating the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearcart: (state) => {
      state.items.length = 0;
    },
  },
});



export const {addItems , removeItem , clearcart} = CartSlice.actions;

export default CartSlice.reducer;
