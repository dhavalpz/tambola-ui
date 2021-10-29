import { Theme } from "@mui/material";
import { darkTheme } from "./DarkTheme";
import { lightTheme } from "./LightTheme";

const themeMap: { [key: string]: Theme } = {
  lightTheme,
  darkTheme,
};

const themeCreator = (theme: string): Theme => {
  return themeMap[theme];
};

export { themeCreator };
