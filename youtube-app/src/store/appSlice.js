import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isOpen: true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    hideSidebar: (state, action) => {
      state.isOpen = false;
    }
  },
});

export const { toggleMenu, hideSidebar } = appSlice.actions;
export default appSlice.reducer;
