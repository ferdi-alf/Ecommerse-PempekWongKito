import { useRef } from "react";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import { Head } from "@inertiajs/react";
import "../../../public/css/style.css";

export default function Welcome({}) {
    const theme = useTheme();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Head title="Pempek Wong Kito" />
            <div
                className={`${
                    theme.palette.mode === "dark" ? "dark" : ""
                } flex`}
            >
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                />
                <div class="p-4 sm:ml-64 w-full relativeS">
                    <Navbar toggleSidebar={toggleSidebar} />

                    <div class="p-4 border-2 mt-20 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                        <div class="grid grid-cols-3 gap-4 mb-4">
                            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg
                                        class="w-3.5 h-3.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 1v16M1 9h16"
                                        />
                                    </svg>
                                </p>
                            </div>
                            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg
                                        class="w-3.5 h-3.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 1v16M1 9h16"
                                        />
                                    </svg>
                                </p>
                            </div>
                            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg
                                        class="w-3.5 h-3.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 1v16M1 9h16"
                                        />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                            <p class="text-2xl text-gray-400 dark:text-gray-500">
                                <svg
                                    class="w-3.5 h-3.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 18"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 1v16M1 9h16"
                                    />
                                </svg>
                            </p>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg
                                        class="w-3.5 h-3.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 1v16M1 9h16"
                                        />
                                    </svg>
                                </p>
                            </div>
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg
                                        class="w-3.5 h-3.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 1v16M1 9h16"
                                        />
                                    </svg>
                                </p>
                            </div>
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg
                                        class="w-3.5 h-3.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 1v16M1 9h16"
                                        />
                                    </svg>
                                </p>
                            </div>
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg
                                        class="w-3.5 h-3.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 1v16M1 9h16"
                                        />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                            <p class="text-2xl text-gray-400 dark:text-gray-500">
                                <svg
                                    class="w-3.5 h-3.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 18"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 1v16M1 9h16"
                                    />
                                </svg>
                            </p>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg
                                        class="w-3.5 h-3.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 1v16M1 9h16"
                                        />
                                    </svg>
                                </p>
                            </div>
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg
                                        class="w-3.5 h-3.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 1v16M1 9h16"
                                        />
                                    </svg>
                                </p>
                            </div>
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg
                                        class="w-3.5 h-3.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 1v16M1 9h16"
                                        />
                                    </svg>
                                </p>
                            </div>
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p class="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg
                                        class="w-3.5 h-3.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 1v16M1 9h16"
                                        />
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
