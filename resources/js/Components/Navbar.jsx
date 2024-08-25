import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCartShopping,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import DarkmodeToggle from "./DarkmodeToggle";
import { useTheme } from "@mui/material/styles";
import { useState, useRef } from "react";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";

const Navbar = ({ toggleSidebar, auth }) => {
    const theme = useTheme();
    const [account, setAccount] = useState(false);
    const accountRef = useRef(null);

    const handleAccount = () => {
        setAccount(!account);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (accountRef.current && !accountRef.current.contains(e.target)) {
                handleAccount();
            }
        };

        if (account) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleAccount);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [account]);

    return (
        <nav
            className={`w-full ${
                theme.palette.mode === "dark" ? "darknav" : "lightnav"
            } fixed top-0 left-0 z-30 flex  sm:pr-2 pr-0 p-2 justify-end items-center`}
        >
            <div className="sm:w-[50%]  lg:w-[50%] md:w-[70%] w-full flex justify-between">
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
                        <div className="relative">
                            <FontAwesomeIcon
                                icon={faUser}
                                onClick={handleAccount}
                            />
                            {account && !auth ? (
                                <div
                                    ref={accountRef}
                                    className={` absolute p-2 rounded-tr-xl right-0 top-10 ${
                                        theme.palette.mode === "dark"
                                            ? "bg-slate-900"
                                            : "bg-white"
                                    }`}
                                >
                                    <p
                                        className={`text-sm font-medium w-36 ${
                                            theme.palette.mode === "dark"
                                                ? "text-white"
                                                : "text-black"
                                        }`}
                                    >
                                        kamu belum memiliki akun klik{" "}
                                        <Link className="text-blue-500 hover:underline">
                                            Disini
                                        </Link>{" "}
                                        untuk login
                                    </p>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <DarkmodeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
