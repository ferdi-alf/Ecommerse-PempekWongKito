import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCartShopping,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import DarkmodeToggle from "./DarkmodeToggle";
import { useTheme } from "@mui/material/styles";

const Navbar = ({ toggleSidebar }) => {
    const theme = useTheme();

    return (
        <nav
            className={`w-full ${
                theme.palette.mode === "dark" ? "darknav" : "lightnav"
            } fixed top-0 left-0 z-30 flex  sm:pr-2 pr-0 p-2 justify-end items-center`}
        >
            <div className="sm:w-[70%]  lg:w-[55%] md:w-[70%] w-full flex justify-between">
                <button
                    onClick={toggleSidebar}
                    aria-controls="default-sidebar"
                    type="button"
                    className="inline-flex items-center p-2 mt-2 ms-3 text-xl text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="logo text-2xl w-1/12">Logo</div>

                <div className="flex   justify-between items-center">
                    <div className="text-orange-400 pr-3 flex flex-nowrap items-center justify-between w-full sm:w-auto sm:justify-center text-xl gap-x-5 p-1 sm:gap-x-6 cursor-pointer">
                        <FontAwesomeIcon icon={faCartShopping} />
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <DarkmodeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
