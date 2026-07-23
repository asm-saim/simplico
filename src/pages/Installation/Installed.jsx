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
        <div className='flex overflow-hidden justify-between items-center rounded-lg mb-5 p-3 bg-gray-900 shadow border border-gray-700'>
            <div className='flex items-center'>
                <div className="w-25 h-25 overflow-hidden">
                    <img src={image} alt={title} className="w-full h-full object-cover"
                    />
                </div>
                <div className='ml-5 space-y-4'>
                    <h1 className='font-bold text-[28px]'>{title}</h1>
                    <div className='flex items-center gap-7 text-lg font-semibold text-gray-400'>
                        <p className='flex gap-1 items-center'>
                            <img className='w-6' src={downloadImg} alt="" />
                            {formatDownloads(downloads)}</p>
                        <p className='flex gap-1 items-center'>
                            <img className='w-6' src={reviewsImg} alt="" />
                            {formatDownloads(reviews)}</p>
                        <p className='flex gap-1 items-center'>
                            <img className='w-6' src={ratingImg} alt="" />
                            {ratingAvg}</p>
                    </div>

                </div>
            </div>
            <div>
                <button onClick={() => handleUninstall(id)}
                    className="btn border-none text-base rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6]">Uninstall</button>
            </div>
        </div>
    );
};

export default Installed;