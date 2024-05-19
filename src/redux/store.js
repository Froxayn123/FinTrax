import { configureStore } from "@reduxjs/toolkit";
import counterQuiz from "./quizSlice";

export default configureStore({
  reducer: {
    counterQuiz: counterQuiz,
  },
});
