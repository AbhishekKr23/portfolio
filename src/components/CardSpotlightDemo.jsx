"use client";

import React from "react";
import { Cover } from "@/components/ui/cover"; // Make sure this path is correct
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Image from "next/image";

const CardSpotlightDemo = () => {
    const openImage = ()=> {
        const imageUrl = "/ai.png"; // Replace with your image URL
       const newWindow = window.open(imageUrl, "_blank");
       
    }
    return (
        <div id="achievements" className="px-8 mb-20 mt-20">
            {/* Heading Section */}
            <div className="flex py-8 flex-col justify-center items-center mb-6">
                <h2 className="mx-auto text-white text-xl md:text-4xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight">
                    <Cover>Achievements/Certifications</Cover>
                </h2>
                <p className="max-w-xl text-[1rem] text-center md:text-lg text-neutral-700 dark:text-neutral-400">
                    Certified. Skilled. Always leveling up.
                </p>
            </div>

            {/* Card Section */}
            <div className="flex flex-wrap justify-center gap-6 p-6 [&>*]:min-w-[340px] [&>*]:w-[340px]">
                <CardSpotlight className="min-w-[300px] h-fit pb-[90px]">
                    <p className="text-xl font-bold text-white mt-2">
                        Introduction to Prompt Engineering – LinkedIn
                    </p>
                    <img
                        src="/ai.png"
                        alt="Prompt Engineering Certificate"
                        className="mt-3 w-full rounded-lg border border-neutral-700"
                    />
                <a onClick={openImage}
                        className="inline-block z-50 absolute mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200 cursor-pointer"
                    >
                        View Certificate
                    </a>
                    
                </CardSpotlight>
            


                <CardSpotlight className="min-w-[300px] h-fit pb-24">
                    <p className="text-xl font-bold text-white mt-2">
                        React JS Certification – Scaler
                    </p>
                    <img
                        src="/react-cert.png"
                        alt="React Certificate"
                        className="mt-3 w-full rounded-lg border border-neutral-700"
                    />
                    <a
                        href="/react-cert.png"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block z-50 absolute mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200 cursor-pointer"
                    >
                        View Certificate
                    </a>
                </CardSpotlight>

                <CardSpotlight className="min-w-[300px] h-fit pb-24">
                    <p className="text-xl font-bold text-white mt-2">
                        Python Certification – Scaler
                    </p>
                    <img
                        src="/python-cert.png"
                        alt="Python Certificate"
                        className="mt-3 w-full rounded-lg border border-neutral-700"
                    />
                    <a
                        href="/python-cert.png"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block z-50 absolute mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200 cursor-pointer"
                    >
                        View Certificate
                    </a>
                </CardSpotlight>
            </div>
        </div>
    );
};

export default CardSpotlightDemo;
