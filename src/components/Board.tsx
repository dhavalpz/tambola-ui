import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { formatNumber, LIMIT } from "../util/utility";

const Board: React.FC = () => {
  const arr: Array<number> = React.useMemo(
    () => Array.from({ length: LIMIT }, (_) => 0),
    []
  );

  return (
    <Paper>
      <Grid
        container
        columns={10}
        padding="20px"
        rowSpacing={2}
        columnSpacing={2}
      >
        {arr.map((num: number, index: number) => (
          <Grid item key={index} xs={2} md={1}>
            <Paper
              sx={{ border: "2px solid red", padding: "5px" }}
              elevation={3}
            >
              <Typography align="center">{formatNumber(num)}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Board;
