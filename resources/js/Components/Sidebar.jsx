import { useRef, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import noAvatar from "../../../public/storage/img/no-avatar.png";
import ProfileSidebar from "./ProfileSidebar";

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

const Sidebar = ({
    isSidebarOpen,
    toggleSidebar,
    activeSection,
    sections,
    auth,
    sectionRefs,
}) => {
    const theme = useTheme();
    const sidebarRef = useRef(null);

    const handleTabClick = (i) => {
        if (sectionRefs[i].current) {
            sectionRefs[i].current.scrollIntoView({
                behavior: "smooth",
                block: i === 2 ? "start" : "center",
            });
        }
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
            className={`fixed top-0 left-0 z-40 w-64 h-screen  transition-transform -translate-x-full sm:translate-x-0 ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } `}
            aria-label="Sidebar"
        >
            <div
                class={`${
                    theme.palette.mode === "dark"
                        ? "bg-gray-900 darkside"
                        : "bg-gray-100 "
                } h-full justify-between px-3 py-4 overflow-y-auto flex flex-col bg-gray-50 `}
            >
                <div className="w-full flex  items-center flex-nowrap gap-x-2 p-1 ">
                    <ProfileSidebar auth={auth} noAvatar={noAvatar} />
                </div>
                <div class="space-y-2 font-medium">
                    <ThemeProvider theme={themee}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            className="flex justify-center  text-center"
                            value={sections.indexOf(activeSection)}
                            indicatorColor="secondary"
                            aria-label="Vertical Tabs"
                            sx={{
                                ".MuiTabs-flexContainerVertical": {
                                    alignItems: "flex-start",
                                },
                                ".MuiTabs-indicator": {
                                    right: 0,
                                    left: "auto",
                                    width: "4px",
                                },
                            }}
                        >
                            {sections.map((section, index) => (
                                <Tab
                                    label={section}
                                    onClick={() => handleTabClick(index)}
                                    sx={
                                        theme.palette.mode === "dark"
                                            ? {
                                                  color: "white",
                                                  justifyContent: "flex-start",
                                                  textAlign: "left",
                                              }
                                            : {
                                                  color: "black",
                                                  justifyContent: "flex-start",
                                                  textAlign: "left",
                                              }
                                    }
                                />
                            ))}
                        </Tabs>
                    </ThemeProvider>
                </div>
                <footer>
                    <p className="font-semibold moderustic">
                        Design by Muhammad Ferdi Alfian
                    </p>
                </footer>
            </div>
        </aside>
    );
};

export default Sidebar;
