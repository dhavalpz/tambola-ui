import React from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { themeCreator } from "./Theme/BaseTheme";

const ThemeContext = React.createContext((_: string) => {});

const APPTHEME = "appTheme";

const ThemeProvider: React.FC = (props) => {
  const currentThemeName = localStorage.getItem(APPTHEME) || "lightTheme";

  const [themeName, setThemeName] = React.useState(currentThemeName);

  const theme = React.useMemo(
    () => createTheme(themeCreator(themeName)),
    [themeName]
  );

  const setTheme = (themeName: string): void => {
    localStorage.setItem(APPTHEME, themeName);
    setThemeName(themeName);
  };

  return (
    <ThemeContext.Provider value={setTheme}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
