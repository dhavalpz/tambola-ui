import React from "react";
import { Grid, Paper } from "@mui/material";
import { formatNumber } from "../../util/utility";
import { END_VALUE } from "../../util/config";
import { subscribe } from "../../util/pubsub/PubSub";
import { OnClickEvent } from "../../util/event/NumberGeneratorEvent";
const Board: React.FC = () => {
  const [numbers, setNumbers] = React.useState<Array<number>>(
    new Array(END_VALUE).fill(0)
  );
  React.useEffect(() => {
    const handler = subscribe(OnClickEvent, (num: number) => {
      const newNumbers = [...numbers];
      newNumbers[num - 1] = num;
      setNumbers(newNumbers);
    });
    return () => {
      handler.unsubscribe();
    };
  }, [numbers]);

  return (
    <Grid container columns={10} padding={3} rowSpacing={2} columnSpacing={2}>
      {numbers.map((num: number, index: number) => (
        <Grid item key={index} xs={2} md={1}>
          <Paper sx={{ padding: 0.5, textAlign: "center" }} elevation={3}>
            {formatNumber(num)}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Board;
