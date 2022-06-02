import React, { useState, useEffect } from "react";

// import randomWord from "random-word-by-length";
// console.log(randomWord(5));

// api data
import getSolution from "./api/getSolution";

const App = () => {
  // state
  const [solution, setSolution] = useState(null);

  // hook
  useEffect(() => {
    getSolution().then((data) => {
      const { word } = data[Math.floor(Math.random() * data.length)];
      setSolution(word);
    });
  }, []);

  console.log(solution);

  return <div>Wobble Wordle</div>;
};

export default App;
