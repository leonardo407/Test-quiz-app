import React from "react";

import { useAppDispatch } from "../../hooks/redux";
import { restart } from "../../store/ActionCreators";

export const RestartButton = () => {
  const dispatch = useAppDispatch();

  const handleRestartBtnClick = () => {
    dispatch(restart());
  };

  return (
    <button onClick={handleRestartBtnClick} className="button">
      Restart
    </button>
  );
};
