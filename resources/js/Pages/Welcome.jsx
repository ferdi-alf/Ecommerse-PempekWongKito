import { useRef } from "react";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import { Head } from "@inertiajs/react";
import "../../../public/css/style.css";
import Corousel from "@/Components/Corousel";
import About from "@/Components/About";
import Service from "@/Components/Service";
import Product from "@/Components/Product";
import RegisterSection from "@/Components/RegisterSection";

export default function Welcome(props) {
    console.log(props);
    const theme = useTheme();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const sections = ["About", "Service", "souvenir shop", "Register"];
    const sectionRefs = sections.map(() => useRef(null));

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "-50% 0px -75% 0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sectionRefs.forEach((ref, i) => {
            if (ref.current) {
                ref.current.id = sections[i];
                observer.observe(ref.current);
            }
        });

        return () => {
            sectionRefs.forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, [sectionRefs]);

    return (
        <>
            <Head title="Pempek Wong Kito" />
            <div
                className={`${
                    theme.palette.mode === "dark" ? "dark" : ""
                } flex`}
            >
                <Sidebar
                    auth={props.auth.user}
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                    sections={sections}
                    sectionRefs={sectionRefs}
                    activeSection={activeSection}
                />
                <div className="p-4 sm:ml-64 w-full relative">
                    <Navbar
                        auth={props.auth.user}
                        toggleSidebar={toggleSidebar}
                    />

                    <div className="sm:p-4 p-0 mt-20   rounded-lg ">
                        <header>
                            <Corousel />
                        </header>

                        <div
                            ref={sectionRefs[0]}
                            className="flex items-center justify-center mb-4 rounded mt-9  "
                        >
                            <About />
                        </div>
                        <div
                            ref={sectionRefs[1]}
                            className="flex items-center justify-center mt-20 mb-20 p-3  rounded "
                        >
                            <Service />
                        </div>
                        <div
                            ref={sectionRefs[2]}
                            className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-2 sm:w-auto gap-4 mb-4"
                        >
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </div>
                        <div
                            ref={sectionRefs[3]}
                            className="w-full flex justify-center items-center"
                        >
                            <RegisterSection />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
