import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "counterUser",
  initialState: {
    value: {
      id: 1249812841,
      userName: "Silvi Putri",
      email: "silviputri@gmail.com",
      phoneNumber: 81234567892,
      avatar: "/Avatar.png",
      balance: 12500000,
    },
  },
});

export const { nextQuestion, previousQuestion } = userSlice.actions;
export default userSlice.reducer;
