import React from "react";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Header } from "./components/Header/Header";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
    background: theme.palette.background.default,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
    </div>
  );
}

export default App;
