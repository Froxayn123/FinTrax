import { createSlice } from "@reduxjs/toolkit";
import { quizQuestions } from "../data/QuizQuestions";

export const quizSlice = createSlice({
  name: "counterQuiz",
  initialState: {
    value: quizQuestions,
    counter: 0,
  },
  reducers: {
    nextQuestion: (state) => {
      state.value[(state.counter += 1)];
    },
    previousQuestion: (state) => {
      state.value[(state.counter -= 1)];
    },
  },
});

export const { nextQuestion, previousQuestion } = quizSlice.actions;
export default quizSlice.reducer;
