// DarkmodeToggle.jsx
import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
// import Brightness4Icon from "@mui/icons-material";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "./ThemeProvider"; // import konteks dari ThemeProvider Anda

const DarkmodeToggle = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
        >
            {theme.palette.mode === "dark" ? <p>helo</p> : <p>wow</p>}
        </IconButton>
    );
};

export default DarkmodeToggle;
