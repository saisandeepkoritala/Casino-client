// store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setTheme } = userSlice.actions;
export default userSlice.reducer;
