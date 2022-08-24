import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Question } from "../../types";
import { decodeHTML } from "../../utils";

interface QuizState {
  questions: Question[];
  currentIndex: number;
  isLoading: boolean;
  score: number;
}

const initialState: QuizState = {
  questions: [],
  currentIndex: 0,
  isLoading: false,
  score: 0,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    questionsFetching(state) {
      state.isLoading = true;
    },
    questionsFetchingSuccess(state, action: PayloadAction<Question[]>) {
      state.isLoading = false;

      state.questions = action.payload.map((q) => ({
        ...q,
        question: decodeHTML(q.question),
        correct_answer: decodeHTML(q.correct_answer),
        incorrect_answers: q.incorrect_answers.map((answer) =>
          decodeHTML(answer)
        ),
      }));
    },
    questionsFetchingError(state) {
      state.isLoading = false;
    },
    selectCorrectAnswer(state) {
      state.score += 1;
      state.currentIndex += 1;
    },
    selectNotCorrectAnswer(state) {
      state.currentIndex += 1;
    },
    restart(state) {
      state.questions = [];
      state.score = 0;
      state.currentIndex = 0;
    },
  },
});

export default quizSlice.reducer;
