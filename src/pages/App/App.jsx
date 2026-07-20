import React from 'react';
import { FiDownload } from "react-icons/fi";
import { IoStar } from "react-icons/io5";

const App = ({ app }) => {
    const { image, title, ratingAvg, downloads } = app;

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

    // {
    //     "image": "https://i.ibb.co/forest-app.png",
    //     "title": "Forest: Focus for Productivity",
    //     "companyName": "Seekrtech",
    //     "id": 1,
    //     "description": "Stay focused and grow virtual trees while avoiding distractions.",
    //     "size": 58,
    //     "reviews": 128400,
    //     "ratingAvg": 4.7,
    //     "downloads": 50000000,
    //     "ratings": [
    //         {
    //             "name": "1 star",
    //             "count": 2400
    //         },
    //         {
    //             "name": "2 star",
    //             "count": 3700
    //         },
    //         {
    //             "name": "3 star",
    //             "count": 11200
    //         },
    //         {
    //             "name": "4 star",
    //             "count": 41200
    //         },
    //         {
    //             "name": "5 star",
    //             "count": 69900
    //         }
    //     ]
    // },


    return (
        <div className='bg-gray-900 rounded-lg overflow-hidden'>
            <img className='' src={image} alt="" />
            <div className='space-y-3 p-3 '>
                <h3 className='font-semibold text-base'>{title}</h3>
                <div className='flex justify-between items-center'>
                    <p className='flex items-center gap-1 border border-blue-400 rounded-lg px-2'><FiDownload /> {formatDownloads(downloads)}</p>
                    <p className='flex items-center gap-1  border border-blue-400 rounded-lg px-2'><IoStar /> {ratingAvg}</p>
                </div>
            </div>


        </div>
    );
};

export default App;