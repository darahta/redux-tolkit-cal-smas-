import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   counterState: 0,
};

export const counterSlice = createSlice({
   name: "counterSlice",
   initialState,
   reducers: {
      increment: (state) => {
         state.counterState += 1;
      },
      decrement: (state) => {
         state.counterState -= 1;
      },
      change: (state, action) => {
         state.counterState += action.payload;
      },
   },
});

export const { increment, decrement, change } = counterSlice.actions;

export default counterSlice.reducer;
