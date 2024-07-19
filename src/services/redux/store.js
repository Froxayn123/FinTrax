import { configureStore } from "@reduxjs/toolkit";
import counterQuiz from "@/services/redux/quizSlice";
import userData from "@/services/redux/userSlice";

export default configureStore({
  reducer: {
    counterQuiz: counterQuiz,
    userData: userData,
  },
});
