import React from 'react';
import bannerImg from "../../assets/hero.png";
import { BsGooglePlay } from "react-icons/bs";
import { RiAppStoreFill } from "react-icons/ri";

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 mt-10 flex flex-col items-center text-center">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                We Build <br />
                <span className="text-blue-400">Productive</span> Apps
            </h1>

            <p className="mt-6 text-gray-300 italic max-w-3xl text-sm md:text-base leading-7">
                At Simplico, we craft innovative apps designed to make everyday life
                simpler, smarter, and more exciting. Our goal is to turn your ideas
                into digital experiences that truly make an impact.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm md:btn-md border-none rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6]"
                >
                    <BsGooglePlay className="text-lg" />
                    Google Play
                </a>

                <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm md:btn-md border-none rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6]"
                >
                    <RiAppStoreFill className="text-lg" />
                    App Store
                </a>
            </div>

            <img
                src={bannerImg}
                alt="Banner"
                className=" mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none
                lg:h-[55vh] object-contain"
            />
        </div>
    );
};

export default Banner;