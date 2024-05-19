import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "counterUser",
  initialState: {
    value: [],
  },
  reducers: {
    nextQuestion: (state) => {
      state.value.push;
    },
    previousQuestion: (state) => {
      state.value[(state.counter -= 1)];
    },
  },
});

export const { nextQuestion, previousQuestion } = userSlice.actions;
export default userSlice.reducer;
