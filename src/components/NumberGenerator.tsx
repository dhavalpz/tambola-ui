import React, { useCallback, useState } from "react";
import random from "lodash.random";
import { Button } from "@mui/material";
import {startValue, endValue } from '../util/utility';
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
    const randomNumber = random(startValue, endValue);
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

  return (
    <div>
      <div>
        <div>Current Number</div>
        <div>{state.currentNumber}</div>
      </div>
      <Button onClick={generateNumber}>Generate Number</Button>
      <div>
        <div>Previous Number</div>
        <div>{state.prevNumber}</div>
      </div>
    </div>
  );
};

export default NumberGenerator;
