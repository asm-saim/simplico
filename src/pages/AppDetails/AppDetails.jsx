import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadImg from "../../assets/icon-downloads.png"
import ratingImg from "../../assets/icon-ratings.png"
import reviewsImg from "../../assets/icon-review.png"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ToastContainer, toast } from 'react-toastify';

const AppDetails = () => {

    //grab the clicked card id
    const { id } = useParams();
    const appId = parseInt(id);

    //load all appdata
    const appDetails = useLoaderData();
    console.log(appDetails)

    //matched clicked app
    const singleAppDetail = appDetails.find(appData => appData.id === appId)

    if (!singleAppDetail) {
        return <h1 className='text-center text-5xl font-bold text-gray-500 my-20'>App not found</h1>
    }

    //destructuring:
    const { image, title, companyName, description, reviews, ratingAvg, downloads, ratings } = singleAppDetail;


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

    //sort ratings:
    const sortedRatings = [...ratings].sort(
        (a, b) => parseInt(b.name) - parseInt(a.name)
    );

    //install button state:
    const [value, setValue] = useState(true)

    const handleInstall = () => {
        setValue(false)
        toast.success("App Installed Successfully!")
    }

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex '>
                <div className='w-1/3'>
                    <img src={image} className='w-90' alt="" />
                </div>
                <div className='w-2/3 space-y-4'>
                    <h1 className='text-4xl font-bold'>{title}</h1>
                    <h2 className='text-xl font-semibold'>Developed by:
                        <span className='text-blue-400 font-bold'> {companyName}</span> </h2>
                    <hr className="my-5 border-gray-600 " />

                    <div className='grid grid-cols-3 mt-10'>
                        <div className='space-y-2'>
                            <img src={downloadImg} alt="" />
                            <h1 className='text-gray-300'>Downloads</h1>
                            <p className='text-4xl font-bold'>{formatDownloads(downloads)}</p>
                        </div>
                        <div className='space-y-2'>
                            <img src={ratingImg} alt="" />
                            <h1 className='text-gray-300'>Average Rating</h1>
                            <p className='text-4xl font-bold'>{ratingAvg}</p>
                        </div>
                        <div className='space-y-2'>
                            <img src={reviewsImg} alt="" />
                            <h1 className='text-gray-300'>Total Reviews</h1>
                            <p className='text-4xl font-bold'>{formatDownloads(reviews)}</p>
                        </div>
                    </div>

                    <button
                        onClick={handleInstall}
                        disabled={!value}
                        className={`btn border-none rounded-lg text-base font-semibold my-5 ${value
                            ? "bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6]"
                            : "bg-gray-500 text-gray-200 cursor-not-allowed"
                            }`}
                    > {value ? "Install Now (240MB)" : "Installed"}
                    </button>
                </div>
            </div>

            <hr className="my-5 border-gray-600" />

            {/* Ratings */}
            <h1 className='text-2xl font-bold mt-10'>Ratings</h1>

            <div className="w-full h-[300px] mt-3">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sortedRatings} layout="vertical" >
                        <XAxis type="number" tick={{ fill: "#9CA3AF" }} />

                        <YAxis type="category" dataKey="name" tick={{ fill: "#9CA3AF" }} />

                        <Tooltip />

                        <Bar dataKey="count" fill="#3B82F6" />
                    </BarChart>
                </ResponsiveContainer>
            </div>


            <hr className="my-5 border-gray-600" />

            {/* Description */}
            <h1 className='text-2xl font-bold mt-10'>Description</h1>
            <p className='text-gray-400 mt-2'>{description}</p>

        </div>
    );
};

export default AppDetails;