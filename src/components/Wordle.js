import React, { useEffect } from "react";

import useWordle from "../hooks/useWordle";

const Wordle = ({ solution }) => {
  // hooks
  const { currentGuess, handleKeyup } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  return <div>{currentGuess}</div>;
};

export default Wordle;
