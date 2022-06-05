import React, { useState, useEffect } from "react";

// packages
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

// import randomWord from "random-word-by-length";
// console.log(randomWord(5));

import useWordle from "./hooks/useWordle";

// api data
import getSolution from "./api/getSolution";

// components
import { Wordle } from "./components";

const App = () => {
  // state
  const [solution, setSolution] = useState(null);
  const [openConfetti, setOpenConfetti] = useState(false);

  // hooks
  const { width, height } = useWindowSize();

  // hook
  useEffect(() => {
    getSolution().then((word) => {
      setSolution(word);
    });
  }, []);

  return (
    <>
      <div className="App">
        <h1>Wobble Wordle</h1>

        {solution && (
          <Wordle solution={solution} setOpenConfetti={setOpenConfetti} />
        )}
      </div>

      {openConfetti && (
        <Confetti
          width={width}
          height={height}
          colors={["#d76050", "#509ed7", "white"]}
        />
      )}
    </>
  );
};

export default App;
