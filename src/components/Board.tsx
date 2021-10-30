import React from "react";
import { Grid, Paper } from "@mui/material";

const formatNumber: (num: number) => string = (num: number) =>
  num === 0 ? "_" : num < 10 ? `0${num}` : `${num}`;

const Board: React.FC = () => {
  const arr: Array<number> = React.useMemo(
    () => Array.from({ length: 90 }, (_) => 0),
    []
  );

  return (
    <Grid
      container
      columns={10}
      padding="20px"
      rowSpacing={2}
      columnSpacing={2}
    >
      {arr.map((num: number, index: number) => (
        <Grid item key={index} xs={2} md={1}>
          <Paper sx={{ border: "2px solid red", padding: "5px" }} elevation={3}>
            {formatNumber(num)}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Board;
