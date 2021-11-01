import React, { useCallback, useState } from "react";
import { random } from "lodash";
import { Button } from "@mui/material";
import { START_VALUE, END_VALUE } from "../../util/config";
import { OnClickEvent } from "../../util/event/NumberGeneratorEvent";
import { publish } from "../../util/pubsub/PubSub";

interface State {
  prevNumber: null | number;
  currentNumber: null | number;
  pickedNumbers: number[];
}

const NumberGenerator: React.FC = () => {
  const [number, setNumber] = useState<State>({
    prevNumber: 0,
    currentNumber: 0,
    pickedNumbers: [],
  });

  const generateNumber = useCallback(() => {
    const randomNumber = random(START_VALUE, END_VALUE);
    if (number.pickedNumbers.includes(randomNumber)) {
      generateNumber();
    } else {
      setNumber({
        prevNumber: number.currentNumber,
        currentNumber: randomNumber,
        pickedNumbers: [...number.pickedNumbers, randomNumber],
      });
    }
    publish(new OnClickEvent(randomNumber));
  }, [number.prevNumber, number.currentNumber]);

  return (
    <>
      <div>
        <div>Current Number</div>
        <div data-testid="currentNo">{number.currentNumber}</div>
      </div>
      <Button onClick={generateNumber} data-testid="btn">
        Generate Number
      </Button>
      <div>
        <div>Previous Number</div>
        <div data-testid="previousNo">{number.prevNumber}</div>
      </div>
    </>
  );
};

export default NumberGenerator;
