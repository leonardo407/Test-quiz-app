import React from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchQuestions } from "../../store/ActionCreators";
import styles from "./Settings.module.css";

export const Settings = () => {
  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector((state) => state.quizReducer);

  const [countQuestions, setCountQuestions] = React.useState(1);

  const handleStart = () => {
    if (countQuestions < 0) return;

    dispatch(fetchQuestions(countQuestions));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountQuestions(+event.target.value);
  };

  return (
    <div className={styles.settings}>
      <h2 className={styles.title}>Amount of questions</h2>
      <input
        type="number"
        min="1"
        className={styles.input}
        value={countQuestions}
        onChange={handleInputChange}
      />
      {isLoading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <button className="button" onClick={handleStart}>
          Start!
        </button>
      )}
    </div>
  );
};
