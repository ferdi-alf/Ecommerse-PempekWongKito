// ThemeProvider.jsx
import React, { createContext, useMemo, useState } from "react";
import {
    ThemeProvider as MUIThemeProvider,
    createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ThemeProvider = ({ children }) => {
    const getDefaultMode = () => {
        const savedMode = localStorage.getItem("themeMode");
        if (savedMode) {
            return savedMode;
        } else {
            const prefersDarkMode = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            return prefersDarkMode ? "dark" : "light";
        }
    };

    const [mode, setMode] = useState(getDefaultMode);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = (e) => {
            setMode(e.matches ? "dark" : "light");
            localStorage.setItem("themeMode", e.matches ? "dark" : "ligth");
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const newMode = prevMode === "light" ? "dark" : "light";
                    localStorage.setItem("themeMode", newMode);
                    return newMode;
                });
            },
        }),
        []
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ThemeProvider;
