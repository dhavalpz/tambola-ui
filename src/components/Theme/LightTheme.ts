import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#66bb6a",
      contrastText: "#fafafa",
    },
    secondary: {
      main: "#ef6c00",
    },
    background: {
      default: "#eeeeee",
    },
    divider: "rgba(120,144,156,0.34)",
  },
   spacing: (value:number) => value * 2
});

export { lightTheme };
