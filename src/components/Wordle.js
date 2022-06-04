import React, { useEffect } from "react";

import useWordle from "../hooks/useWordle";

const Wordle = ({ solution }) => {
  // hooks
  const { turn, currentGuess, guesses, isCorrect, handleKeyup } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return <div>{currentGuess}</div>;
};

export default Wordle;
