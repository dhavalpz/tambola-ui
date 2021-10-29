import React, { useCallback, useEffect, useState } from "react";
import random from "lodash.random";
import useStyles from '../styled/NumberGenerator';

interface State {
  prevNumber: null | number;
  currentNumber: null | number;
  pickedNumbers: number[];
}

const NumberGenerator = () => {
  const classes=useStyles();
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
    <div className={classes.container}>
      <div className={classes.currContainer}>
        <div className={classes.currNumberText}>Current Number</div>
        <div className={classes.currNumber} data-testid="currentNo" >{state.currentNumber}</div>
      </div>
      
      <div className={classes.prevContainer}>
        <div className={classes.prevNumberText}>Previous Number</div>
        <div className={classes.prevNumber}>{state.prevNumber}</div>
      </div>
    </div>
  );
};

export default NumberGenerator;
