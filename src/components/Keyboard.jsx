import React, { useEffect, useState } from "react";

// data
import keyboard from "../api/keyboard";

const Keyboard = ({ usedKeys, handleTouchBoard }) => {
  // state
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    keyboard().then((data) => setLetters(data));
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key];
          return (
            <div
              onClick={() => handleTouchBoard(l.key)}
              key={l.key}
              className={color}
            >
              {l.key}
            </div>
          );
        })}
    </div>
  );
};

export default Keyboard;
