import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0a1929",
      contrastText: "#fafafa",
    },
    secondary: {
      main: "#ef6c00",
    },
    background: {
      paper: "#001e3c",
      default: "#0a1929",
    },
    divider: "rgba(120,144,156,0.34)",
  },
  spacing: (value:number) => value * 2
});

export { darkTheme };
