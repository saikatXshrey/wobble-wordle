import React, { useEffect, useState, useRef } from "react";

// hooks
import useWordle from "../hooks/useWordle";

import Grid from "./Grid";
import Keyboard from "./Keyboard";
import Modal from "./Modal";
import Snackbar from "./SnackBar";

const Wordle = ({ solution, setOpenConfetti }) => {
  // state
  const [openModal, setOpenModal] = useState(false);

  // hooks
  const {
    usedKeys,
    turn,
    currentGuess,
    guesses,
    isCorrect,
    handleKeyup,
    handleTouchBoard,
    history,
  } = useWordle(solution);
  const boardRef = useRef();

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      setOpenConfetti(true);
      setTimeout(() => setOpenModal(true), 3000);
      window.removeEventListener("keyup", handleKeyup);
    }

    if (turn > 5) {
      setTimeout(() => setOpenModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, setOpenConfetti, turn, isCorrect]);

  return (
    <>
      <div ref={boardRef}>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        <Keyboard usedKeys={usedKeys} handleTouchBoard={handleTouchBoard} />

        {/* pop-up snackbar */}
        {history.includes(currentGuess) ? (
          <Snackbar
            open={history.includes(currentGuess)}
            message="Current word already used!"
            color="warning"
          />
        ) : (
          <></>
        )}
      </div>

      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        solution={solution}
        turn={turn}
        boardRef={boardRef}
        isCorrect={isCorrect}
      />
    </>
  );
};

export default Wordle;
