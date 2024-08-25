import React, { useState } from "react";

const images = [
    "https://cdna.artstation.com/p/media_assets/images/images/000/179/584/large/landscape_test3.jpg?1515008266",
    "https://microbot.ch/new/wp-content/uploads/2015/11/2DLandscape18.jpg",
    "https://cdna.artstation.com/p/media_assets/images/images/000/179/584/large/landscape_test3.jpg?1515008266",
];

export default function Corousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <img
                    src={images[currentIndex]}
                    alt="carousel"
                    className="absolute block w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-between px-4">
                <button
                    onClick={handlePrev}
                    className="text-white bg-black bg-opacity-50 rounded-full p-2"
                >
                    &lt;
                </button>
                <button
                    onClick={handleNext}
                    className="text-white bg-black bg-opacity-50 rounded-full p-2"
                >
                    &gt;
                </button>
            </div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? "bg-white" : "bg-gray-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
