import React from "react";
import { Grid, Paper } from "@mui/material";
import { formatNumber } from "../../util/utility";
import { END_VALUE } from "../../util/config";

const Board: React.FC = () => {
  const arr: Array<number> = React.useMemo(
    () => Array.from({ length: END_VALUE }, (_) => 0),
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
