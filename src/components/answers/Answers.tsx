import React from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  selectCorrectAnswer,
  selectNotCorrectAnswer,
} from "../../store/ActionCreators";
import { Answer } from "../answer/Answer";
import styles from "./Answers.module.css";

type AnswersPropTypes = {
  answers: string[];
};

export const Answers: React.FC<AnswersPropTypes> = ({ answers }) => {
  const dispatch = useAppDispatch();

  const { questions, currentIndex } = useAppSelector(
    (state) => state.quizReducer
  );

  const [selected, setSelected] = React.useState("");

  const handleAnswerClick = (answer: string) => {
    if (selected) return;

    setSelected(answer);
  };

  const handleBtnNextClick = () => {
    if (!selected) return;

    selected === questions[currentIndex].correct_answer
      ? dispatch(selectCorrectAnswer())
      : dispatch(selectNotCorrectAnswer());

    setSelected("");
  };

  const isRight = (answer: string) => {
    if (!selected) return false;

    return answer === questions[currentIndex].correct_answer;
  };

  const isNotRight = (answer: string) => {
    if (!selected) return false;

    return (
      selected === answer && answer !== questions[currentIndex].correct_answer
    );
  };

  return (
    <div className={styles.answers}>
      {answers.map((answer, idx) => (
        <Answer
          answer={answer}
          key={idx}
          onClick={handleAnswerClick}
          isRight={isRight(answer)}
          isNotRight={isNotRight(answer)}
        />
      ))}
      <button onClick={handleBtnNextClick} className="button">
        Next
      </button>
    </div>
  );
};
