import { useRef, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const themee = createTheme({
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        color: "#fb923c", // Warna text ketika aktif
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: "#fb923c", // Warna indicator ketika aktif
                },
            },
        },
    },
});

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const theme = useTheme();
    const sidebarRef = useRef(null);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                toggleSidebar();
            }
        };

        if (isSidebarOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarOpen]);

    return (
        <aside
            ref={sidebarRef}
            id="default-sidebar"
            className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } `}
            aria-label="Sidebar"
        >
            <div
                class={`${
                    theme.palette.mode === "dark"
                        ? "bg-gray-900 darkside"
                        : "bg-gray-100 "
                } h-full px-3 py-4 overflow-y-auto bg-gray-50 `}
            >
                <div class="space-y-2 font-medium">
                    <ThemeProvider theme={themee}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            textColor="inherit "
                            indicatorColor="secondary"
                            onChange={handleChange}
                            aria-label="Vertical Tabs"
                        >
                            <Tab label="About" {...a11yProps(0)} />
                            <Tab label="Product" {...a11yProps(1)} />
                            <Tab label="Tips & Tricks" {...a11yProps(2)} />
                            <Tab label="Rating" {...a11yProps(3)} />
                        </Tabs>
                    </ThemeProvider>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
