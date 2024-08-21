import { Link, Head } from "@inertiajs/react";
import "../../../public/css/style.css";
import Navbar from "@/Components/Navbar";

export default function Welcome({ auth, laravelVersion }) {
    return (
        <div className="">
            <Navbar />
            <Head title="Pempek Wong Kito" />
            <p>Hello Word</p>
        </div>
    );
}
