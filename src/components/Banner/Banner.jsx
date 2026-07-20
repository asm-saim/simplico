import React from 'react';
import bannerImg from "../../assets/hero.png"
import { BsGooglePlay } from "react-icons/bs";
import { RiAppStoreFill } from "react-icons/ri";

const Banner = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-5 max-w-7xl mx-auto'>
            <h1 className='text-5xl font-bold text-center leading-tight'>We Build <br />
                <span className='text-blue-400'>Productive</span> Apps</h1>
            <p className='text-center text-gray-300 italic'>At Simplico, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex items-center justify-center space-x-5'>
                <button className="btn border-none text-base rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6]"><BsGooglePlay /> Google Play</button>
                <button className="btn border-none text-base rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6]"><RiAppStoreFill /> App Store</button>
            </div>
            <img className='w-[568px]' src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;