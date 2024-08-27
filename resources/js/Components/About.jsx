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
                    <strong>Selamat Datang di Oleh-oleh Wong Kito</strong>{" "}
                    Temukan berbagai pilihan oleh-oleh khas Palembang dengan
                    mudah dan cepat melalui website "Oleh-oleh Wong Kito". Kami
                    hadir untuk memudahkan para wisatawan dan pengunjung dalam
                    mencari dan menemukan toko oleh-oleh terbaik di Palembang.
                    Dengan fitur-fitur unggulan kami, Anda bisa mencari toko
                    terdeka dan mendapatkan petunjuk arah
                </p>
            </div>
        </div>
    );
};

export default About;
