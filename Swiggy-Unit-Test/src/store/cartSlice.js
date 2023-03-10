import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  // 'cart' is one of the slice from the store
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    // "state" is the initial state, then when we change the data it holds the current state
    // "action" is data which is coming in
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    }
  }

})

// Export "action" by name - because they have many actions
export const {addItem, removeItem, clearCart} = cartSlice.actions;

// "cartSlice.reducer" - It will combine all the "reducers" and export it.
export default cartSlice.reducer;

// Behind the scene
// cartSlice = {
//   actions: {
//     addItem,
//     removeItem,
//     clearCart
//   },
//   reducers: reducers
// }