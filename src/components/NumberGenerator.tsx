import React, { useCallback, useEffect, useState } from "react";
import random from "lodash.random";

interface State {
  prevNumber: null | number;
  currentNumber: null | number;
  pickedNumbers: number[];
}

const NumberGenerator = () => {
  const [state, setState] = useState<State>({
    prevNumber: null,
    currentNumber: 0,
    pickedNumbers: [],
  });

  const generateNumber = useCallback(() => {
    const randomNumber = random(1, 90);
    if (state.pickedNumbers.includes(randomNumber)) {
      generateNumber();
    } else {
      setState({
        prevNumber: state.currentNumber,
        currentNumber: randomNumber,
        pickedNumbers: [...state.pickedNumbers, randomNumber],
      });
    }
  }, [state.prevNumber, state.currentNumber]);

  useEffect(() => {
    setInterval(() => {
      generateNumber();
    }, 5000);
  }, [generateNumber]);

  return (
    <div>
      <div>
        <div>Current Number</div>
        <div>{state.currentNumber}</div>
      </div>

      <div>
        <div>Previous Number</div>
        <div>{state.prevNumber}</div>
      </div>
    </div>
  );
};

export default NumberGenerator;
