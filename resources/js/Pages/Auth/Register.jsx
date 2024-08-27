import { Head } from "@inertiajs/react";
import { TextField, useTheme } from "@mui/material";

export default function Register() {
    const theme = useTheme();

    return (
        <>
            <Head title="register" />
            <div
                className={`${
                    theme.palette.mode === "dark"
                        ? "bg-slate-950 text-white"
                        : "bg-slate-50"
                } flex justify-center  h-screen `}
            >
                <div className="w-4/5  flex flex-col justify-center items-center">
                    <div
                        className={`${
                            theme.palette.mode === "dark"
                                ? "bg-gray-800"
                                : "bg-white"
                        }  w-1/2 rounded-md shadow-md p-3`}
                    >
                        <p className="text-2xl moderustic font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-700 to-orange-400">
                            Register
                        </p>
                        <div className="grid grid-cols-2 gap-x-3">
                            <TextField
                                id="standard-basic"
                                color="warning"
                                label="Username"
                                variant="standard"
                            />
                            <TextField
                                id="standard-basic"
                                label="Full Name"
                                color="warning"
                                variant="standard"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-x-3">
                            <TextField
                                id="standard-basic"
                                label="Email"
                                color="warning"
                                variant="standard"
                            />
                            <TextField
                                color="warning"
                                id="standard-basic"
                                label="Number Phone"
                                variant="standard"
                                type="number"
                            />
                        </div>

                        <label
                            for="message"
                            className="block mt-5 text-sm font-medium  dark:text-white"
                        >
                            Alamat
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write your thoughts here..."
                        ></textarea>
                    </div>
                </div>
            </div>
        </>
    );
}
