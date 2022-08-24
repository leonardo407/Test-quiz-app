import axios from "axios";

import { quizSlice } from "./reducers/QuizSlice";
import { AppDispatch } from "./store";

export const fetchQuestions =
  (amount: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(quizSlice.actions.questionsFetching());

      const response = await axios.get(
        `https://opentdb.com/api.php?amount=${amount}`
      );

      const questions = response.data.results;
      dispatch(quizSlice.actions.questionsFetchingSuccess(questions));
    } catch (e) {
      dispatch(quizSlice.actions.questionsFetchingError());
      alert(e);
    }
  };

export const selectCorrectAnswer = () => (dispatch: AppDispatch) => {
  dispatch(quizSlice.actions.selectCorrectAnswer());
};

export const selectNotCorrectAnswer = () => (dispatch: AppDispatch) => {
  dispatch(quizSlice.actions.selectNotCorrectAnswer());
};

export const restart = () => (dispatch: AppDispatch) => {
  dispatch(quizSlice.actions.restart());
};
