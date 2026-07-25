import React from 'react';
import downloadImg from "../../assets/icon-downloads.png"
import ratingImg from "../../assets/icon-ratings.png"
import reviewsImg from "../../assets/icon-review.png"
import { removeInstalledApp } from '../../utility/utility';

const Installed = ({ app, handleUninstall }) => {
    const { image, title, id, downloads, ratingAvg, reviews } = app;
    console.log(app);

    //convert numbers to K  M  B:
    const formatDownloads = (downloads) => {
        if (downloads >= 1000000000) {
            return +(downloads / 1000000000).toFixed(1) + "B";
        }

        if (downloads >= 1000000) {
            return +(downloads / 1000000).toFixed(1) + "M";
        }

        if (downloads >= 1000) {
            return +(downloads / 1000).toFixed(1) + "K";
        }

        return downloads.toString();
    };



    return (
        <div className='flex flex-col sm:flex-row overflow-hidden justify-between sm:items-center gap-4 rounded-lg mb-5 p-3 sm:p-4 bg-gray-900 shadow border border-gray-700'>
            <div className='flex items-center gap-4 sm:gap-0'>
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-25 md:h-25 shrink-0 overflow-hidden">
                    <img src={image} alt={title} className="w-full h-full object-cover"
                    />
                </div>
                <div className='sm:ml-5 space-y-2 sm:space-y-4'>
                    <h1 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-[28px]'>{title}</h1>
                    <div className='flex flex-wrap items-center gap-3 sm:gap-5 md:gap-7 text-sm sm:text-base md:text-lg font-semibold text-gray-400'>
                        <p className='flex gap-1 items-center'>
                            <img className='w-5 sm:w-6' src={downloadImg} alt="" />
                            {formatDownloads(downloads)}</p>
                        <p className='flex gap-1 items-center'>
                            <img className='w-5 sm:w-6' src={reviewsImg} alt="" />
                            {formatDownloads(reviews)}</p>
                        <p className='flex gap-1 items-center'>
                            <img className='w-5 sm:w-6' src={ratingImg} alt="" />
                            {ratingAvg}</p>
                    </div>

                </div>
            </div>
            <div className='self-stretch sm:self-auto'>
                <button onClick={() => handleUninstall(id)}
                    className="btn btn-sm sm:btn-md w-full sm:w-auto border-none text-sm sm:text-base rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6]">Uninstall</button>
            </div>
        </div>
    );
};

export default Installed;