import { useState } from "react";
import noAvatar from "../../../../public/storage/img/no-avatar.png";
import { TextField } from "@mui/material";

const RegisterTwo = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [preview, setPreview] = useState(noAvatar);

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Corrected typo
        if (file) {
            setSelectedImage(file);
            setPreview(URL.createObjectURL(file)); // Create a preview URL
        }
    };

    const handleClickIcon = () => {
        document.getElementById("fileInput").click();
    };

    return (
        <>
            <div className="flex md:flex-row flex-col gap-x-4">
                <div className="relative flex rounded-full sm:w-44 sm:h-44 w-32 h-32">
                    <img src={preview} alt="" className="rounded-full" />
                    <div
                        onClick={handleClickIcon}
                        className="rounded-full text-white bottom-3 right-5 w-6 h-6 text-sm text-center absolute border-2 border-white bg-transparent bg-gradient-to-br from-red-700 to-orange-400"
                    >
                        <i class="fa-solid fa-pencil"></i>
                    </div>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                </div>
                <p className="moderustic lg:w-40 font-semibold mt-2">
                    {" "}
                    logo toko usaha atau atau foto toko mu
                </p>
            </div>

            <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Deskripsi Toko
            </label>
            <textarea
                id="Description"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukan Deskripsi tokomu"
            ></textarea>
            <TextField
                id="standard-basic"
                color="warning"
                className="w-full mt-2"
                label="Link Instagram (opsional) "
                variant="standard"
            />
            <TextField
                id="standard-basic"
                color="warning"
                className="w-full mt-2"
                label="Link Tiktok (opsional) "
                variant="standard"
            />
        </>
    );
};

export default RegisterTwo;
