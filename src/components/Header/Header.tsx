import Button from "@mui/material/Button";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeSetter";

const Header: React.FC = () => {
  const setThemeName = useContext(ThemeContext);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setThemeName("lightTheme")}
      >
        Light Theme
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setThemeName("darkTheme")}
      >
        Dark Theme
      </Button>
    </>
  );
};
export { Header };
