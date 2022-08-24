import React from "react";

import { useAppSelector } from "../../hooks/redux";
import { RestartButton } from "../restart-button/RestartButton";
import styles from "./Result.module.css";

export const Result = () => {
  const { questions, score } = useAppSelector((state) => state.quizReducer);

  return (
    <div className={styles.result}>
      <p className={styles.title}>
        Score {score}/{questions.length}
      </p>
      <RestartButton />
    </div>
  );
};
