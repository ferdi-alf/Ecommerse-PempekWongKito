import { Link } from "@inertiajs/react";
import { TextField } from "@mui/material";

const RegisterOne = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-x-3">
                <TextField
                    id="standard-basic"
                    color="warning"
                    label="Nama Pengguna"
                    variant="standard"
                />
                <TextField
                    id="standard-basic"
                    label="Nama Toko"
                    color="warning"
                    variant="standard"
                />
            </div>
            <div className="grid grid-cols-1  mt-5 gap-y-5">
                <TextField
                    id="standard-basic"
                    label="Email"
                    color="warning"
                    type="email"
                    variant="standard"
                />
                <TextField
                    color="warning"
                    id="standard-basic"
                    label="contact toko"
                    variant="standard"
                    type="number"
                />
            </div>
            <div className="mt-10 lg:mb-20 md:mb-14 mb-10 w-full">
                <TextField
                    className="w-full"
                    id="outlined-basic"
                    label="Link Google maps toko"
                    variant="outlined"
                    color="warning"
                />
                <p className="moderustic font-light">
                    Mau tau cara mendapatkan Link Google Maps toko anda. Klik?{" "}
                    <Link className="text-blue-500  hover:underline">
                        Disini
                    </Link>
                </p>
            </div>
        </>
    );
};

export default RegisterOne;
