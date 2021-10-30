import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Brightness2OutlinedIcon from "@mui/icons-material/Brightness2Outlined";
import Brightness7OutlinedIcon from "@mui/icons-material/Brightness7Outlined";
import { useContext } from "react";
import { ThemeContext } from "../ThemeSetter";

const Header: React.FC = () => {
  const setThemeName = useContext(ThemeContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" align="center" sx={{ flexGrow: 1 }}>
            TAMBOLA
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            size="small"
            onClick={() => setThemeName("lightTheme")}
          >
            <Brightness7OutlinedIcon />
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="small"
            onClick={() => setThemeName("darkTheme")}
          >
            <Brightness2OutlinedIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export { Header };
