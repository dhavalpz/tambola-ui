import React, { useCallback, useState } from "react";
import { random } from "lodash";
import { Button, Grid, Paper } from "@mui/material";
import { START_VALUE, END_VALUE } from "../../util/config";
import { NumberGenerate } from "../../util/event/NumberGenerate";
import { publish } from "../../util/pubsub/pubSub";

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
    publish(new NumberGenerate(randomNumber));
  }, [number.prevNumber, number.currentNumber]);

  return (
    <Grid container columns={3} p={10} mt={10}>
      <Grid item xs={1}>
        <Paper sx={{ textAlign: "center", p: 10, fontSize: 20 }}>
          Current Number
        </Paper>
        <Paper
          sx={{ textAlign: "center", fontSize: 40, p: 5 }}
          data-testid="currentNo"
        >
          {number.currentNumber}
        </Paper>
      </Grid>
      <Grid item xs={1} sx={{ textAlign: "center" }} pt={18} pl={5} pr={5}>
        <Button
          onClick={generateNumber}
          data-testid="btn"
          sx={{ color: "#66bb6a", border: "2px groove green", fontSize: 11 }}
        >
          Generate Number
        </Button>
      </Grid>
      <Grid item xs={1}>
        <Paper sx={{ textAlign: "center", p: 10, fontSize: 20 }}>
          Previous Number
        </Paper>
        <Paper
          sx={{ textAlign: "center", fontSize: 40, p: 5 }}
          data-testid="previousNo"
        >
          {number.prevNumber}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default NumberGenerator;
