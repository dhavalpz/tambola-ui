import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { themeCreator } from "./Theme/BaseTheme";

const ThemeContext = React.createContext((themename: string) => {});

const ThemeSetter: React.FC = (props) => {
  //    Read current Theme from local storage
  const currentThemeName = localStorage.getItem("appTheme") || "lightTheme";
  //    state to hold the selected theme Name
  const [themeName, _setThemeName] = useState(currentThemeName);

  //    get the theme object by theme name
  const theme = React.useMemo(
    () => createTheme(themeCreator(themeName)),
    [themeName]
  );

  const setThemeName = (themeName: string): void => {
    localStorage.setItem("appTheme", themeName);
    _setThemeName(themeName);
  };

  return (
    <ThemeContext.Provider value={setThemeName}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeSetter, ThemeContext };
