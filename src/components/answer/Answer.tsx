import React from "react";

import styles from "../answer/Answer.module.css";

type AnswerPropTypes = {
  answer: string;
  onClick: (val: string) => void;
  isRight: boolean;
  isNotRight: boolean;
};

export const Answer: React.FC<AnswerPropTypes> = ({
  answer,
  onClick,
  isRight,
  isNotRight,
}) => {
  const handleClick = () => {
    onClick(answer);
  };

  return (
    <div
      className={[
        styles.answer,
        isRight && styles.success,
        isNotRight && styles.error,
      ].join(" ")}
      onClick={handleClick}
    >
      {answer}
    </div>
  );
};
