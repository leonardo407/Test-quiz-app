import React from "react";

import { useAppSelector } from "../../hooks/redux";
import { shuffle } from "../../utils";
import { Answers } from "../answers/Answers";
import { RestartButton } from "../restart-button/RestartButton";
import styles from "./Quiz.module.css";

export const Quiz = () => {
  const { questions, currentIndex, score } = useAppSelector(
    (state) => state.quizReducer
  );

  const [answers, setAnswers] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (!questions.length) return;

    const question = questions[currentIndex];

    const combinedAnswers = [
      ...question.incorrect_answers,
      question.correct_answer,
    ];

    setAnswers(shuffle(combinedAnswers));
  }, [currentIndex]);

  return (
    <div className={styles.quiz}>
      <div className={styles.topWrapper}>
        <div className={styles.count}>
          Question {currentIndex + 1} from {questions.length}
        </div>
        <div className={styles.score}>Score: {score}</div>
      </div>
      <div className={styles.question}>{questions[currentIndex]?.question}</div>
      <Answers answers={answers} />
      <RestartButton />
    </div>
  );
};
