// DarkmodeToggle.jsx
import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "./ThemeProvider"; // import konteks dari ThemeProvider Anda
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const DarkmodeToggle = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <button
            className={` ${
                theme.palette.mode === "dark"
                    ? "hover:bg-gray-600"
                    : "hover:bg-gray-200"
            } hidden sm:block  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2`}
        >
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === "dark" ? (
                    <FontAwesomeIcon icon={faSun} />
                ) : (
                    <FontAwesomeIcon icon={faMoon} />
                )}
            </IconButton>
        </button>
    );
};

export default DarkmodeToggle;
