import { Grid, Paper } from "@mui/material";
import React from "react";

const arr = Array.from({ length: 90 }, (_, i) => i + 1);

const numberToBeDisplayed: (num: number) => string = (num: number) =>
  num < 10 ? `0${num}` : `${num}`;

const Board: React.FC = () => {
  return (
    <Grid
      container
      columns={10}
      padding="20px"
      rowSpacing={2}
      columnSpacing={2}
    >
      {arr.map((i: number) => (
        <Grid item key={i} xs={2} md={1}>
          <Paper sx={{ border: "2px solid red", padding: "5px" }} elevation={3}>
            {numberToBeDisplayed(i)}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Board;
