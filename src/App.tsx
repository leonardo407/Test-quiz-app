import React from "react";

import styles from "./App.module.css";
import { Quiz } from "./components/quiz/Quiz";
import { Result } from "./components/result/Result";
import { Settings } from "./components/settings/Settings";
import { useAppSelector } from "./hooks/redux";

const App = () => {
  const { questions, currentIndex } = useAppSelector(
    (state) => state.quizReducer
  );

  return (
    <div className="App">
      <div className={styles.wrapper}>
        {!questions.length ? (
          <Settings />
        ) : currentIndex < questions.length ? (
          <Quiz />
        ) : (
          <Result />
        )}
      </div>
    </div>
  );
};

export default App;
