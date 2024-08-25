import {
    faInstagram,
    faFacebook,
    faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "@mui/material";

const About = () => {
    const theme = useTheme();

    return (
        <div
            className={`flex flex-col border-l-2 border-slate-400 p-3 ${
                theme.palette.mode === "dark" ? "bg-slate-900" : "bg-slate-100"
            }`}
        >
            <div className={`w-full  gap-3  flex md:flex-row flex-col`}>
                <div className="row-span-2">
                    <img
                        class="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                        src="https://1.bp.blogspot.com/-nV7dEc1XHik/Uju3v35yVWI/AAAAAAAACBQ/4AORiMrneT8/s1600/87.JPG"
                        alt="Bordered avatar"
                    />
                </div>

                <p className="moderustic md:w-3/4 w-full font-light">
                    Pempek wong kito adalah toko pempek yang berada di palembang
                    yang sudah berdiri dari 1992, beralamat di Jl. Sersan Sani
                    No.1019, Pipa Jaya, Kec. Kemuning, Kota Palembang, Sumatera
                    Selatan. Disini kami menyediakan pempek secara online untuk
                    mencicipi cita rasa asli pempek khas palembang.
                </p>
            </div>
            <div className="flex mt-5 md:w-auto w-full md:justify-start justify-between sm:justify-around  flex-nowrap sm:gap-x-10 gap-x-3">
                <div className="text-orange-400 p-2 rounded-lg border-2 border-orange-400">
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className="sm:text-3xl text-3xl"
                    />
                </div>
                <div className="text-orange-400 p-2 rounded-lg border-2 border-orange-400">
                    <FontAwesomeIcon
                        icon={faFacebook}
                        className="sm:text-3xl text-3xl"
                    />
                </div>
                <div className="text-orange-400 p-2 rounded-lg border-2 border-orange-400">
                    <FontAwesomeIcon
                        icon={faTiktok}
                        className="sm:text-3xl text-3xl"
                    />
                </div>
                <div className="text-orange-400 p-2 rounded-lg border-2 border-orange-400">
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        className="sm:text-3xl text-3xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
