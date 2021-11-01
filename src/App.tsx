import React, { useEffect, useState } from "react";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Header from "./components/Header/Header";
import NumberGenerator from "./components/NumberGenerator/NumberGenerator";
import Board from "./components/Board/Board";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    background: theme.palette.background.default,
  },
}));
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <NumberGenerator />
      <Board />
    </div>
  );
};

export default App;
