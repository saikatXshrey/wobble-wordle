import React, { useEffect, useState } from "react";

// hooks
import useWordle from "../hooks/useWordle";

import Grid from "./Grid";
import Keyboard from "./Keyboard";
import Modal from "./Modal";

const Wordle = ({ solution }) => {
  // state
  const [openModal, setOpenModal] = useState(false);

  // hooks
  const { usedKeys, turn, currentGuess, guesses, isCorrect, handleKeyup } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      setTimeout(() => setOpenModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    if (turn > 5) {
      setTimeout(() => setOpenModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, turn, isCorrect]);

  return (
    <>
      <div>solution - {solution}</div>
      <div>{currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keyboard usedKeys={usedKeys} />
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        solution={solution}
        turn={turn}
        isCorrect={isCorrect}
      />
    </>
  );
};

export default Wordle;
