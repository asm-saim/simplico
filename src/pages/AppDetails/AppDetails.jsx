import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip,} from "recharts";
import { toast } from "react-toastify";

import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewsImg from "../../assets/icon-review.png";

import {
    addToInstalledDB,
    getInstalledApps,
} from "../../utility/utility";

const AppDetails = () => {

    const { id } = useParams();
    const appId = Number(id);

    const appDetails = useLoaderData();

    const app = appDetails.find(app => app.id === appId);

    if (!app) {
        return (
            <div className="text-center py-20 md:py-32 px-4">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-400">
                    App Not Found
                </h1>
            </div>
        );
    }

    const {
        image,
        title,
        companyName,
        description,
        downloads,
        reviews,
        ratingAvg,
        ratings,
        size,
    } = app;

    const sortedRatings = [...ratings].sort(
        (a, b) => parseInt(b.name) - parseInt(a.name)
    );

    const [canInstall, setCanInstall] = useState(
        !getInstalledApps().includes(appId)
    );

    const handleInstall = () => {

        const installed = addToInstalledDB(appId);

        if (installed) {
            setCanInstall(false);
            toast.success("App Installed Successfully!");
        } else {
            toast.error("App is already installed!");
        }
    };

    const formatDownloads = (number) => {

        if (number >= 1_000_000_000)
            return `${(number / 1_000_000_000).toFixed(1)}B`;

        if (number >= 1_000_000)
            return `${(number / 1_000_000).toFixed(1)}M`;

        if (number >= 1_000)
            return `${(number / 1_000).toFixed(1)}K`;

        return number.toString();
    };

    return (

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">

            {/* Top Section */}

            <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 items-center md:items-start">

                {/* Image */}

                <div className="w-full md:w-1/3 flex justify-center">

                    <div className="w-48 sm:w-64 md:w-full max-w-xs md:max-w-sm">

                        <img
                            src={image}
                            alt={title}
                            className="w-full object-contain"
                        />

                    </div>

                </div>

                {/* Content */}

                <div className="w-full md:w-2/3 text-center md:text-left">

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold break-words">
                        {title}
                    </h1>

                    <h2 className="text-base sm:text-lg md:text-xl font-semibold mt-3 md:mt-4">
                        Developed by{" "}
                        <span className="text-blue-400">
                            {companyName}
                        </span>
                    </h2>

                    <hr className="my-6 sm:my-8 border-gray-700" />

                    {/* Stats */}

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">

                        <div className="space-y-2 text-center md:text-left">

                            <img
                                src={downloadImg}
                                alt="Downloads"
                                className="w-7 h-7 sm:w-8 sm:h-8 mx-auto md:mx-0"
                            />

                            <p className="text-sm sm:text-base text-gray-400">
                                Downloads
                            </p>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                                {formatDownloads(downloads)}
                            </h2>

                        </div>

                        <div className="space-y-2 text-center md:text-left">

                            <img
                                src={ratingImg}
                                alt="Rating"
                                className="w-7 h-7 sm:w-8 sm:h-8 mx-auto md:mx-0"
                            />

                            <p className="text-sm sm:text-base text-gray-400">
                                Average Rating
                            </p>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                                {ratingAvg}
                            </h2>

                        </div>

                        <div className="space-y-2 text-center md:text-left">

                            <img
                                src={reviewsImg}
                                alt="Reviews"
                                className="w-7 h-7 sm:w-8 sm:h-8 mx-auto md:mx-0"
                            />

                            <p className="text-sm sm:text-base text-gray-400">
                                Reviews
                            </p>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                                {formatDownloads(reviews)}
                            </h2>

                        </div>

                    </div>

                    {/* Button */}

                    <button
                        onClick={handleInstall}
                        disabled={!canInstall}
                        className={`btn btn-sm md:btn-md mt-8 sm:mt-10 w-full sm:w-auto border-none rounded-lg font-semibold ${canInstall
                            ? "bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6]"
                            : "bg-gray-600 text-gray-300 cursor-not-allowed"
                            }`}
                    >

                        {canInstall
                            ? `Install Now (${size} MB)`
                            : "Installed"}

                    </button>

                </div>

            </div>

            <hr className="my-8 sm:my-10 border-gray-700" />

            {/* Ratings */}

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
                Ratings
            </h2>

            <div className="w-full h-[220px] sm:h-[280px] md:h-[380px]">

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart
                        data={sortedRatings}
                        layout="vertical"
                        margin={{ top: 0, right: 16, left: 0, bottom: 0 }}
                    >

                        <XAxis
                            type="number"
                            tick={{ fill: "#9CA3AF", fontSize: 12 }}
                        />

                        <YAxis
                            type="category"
                            dataKey="name"
                            tick={{ fill: "#9CA3AF", fontSize: 12 }}
                            width={40}
                        />

                        <Tooltip />

                        <Bar
                            dataKey="count"
                            fill="#3B82F6"
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

            <hr className="my-8 sm:my-10 border-gray-700" />

            {/* Description */}

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Description
            </h2>

            <p className="text-gray-400 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg">
                {description}
            </p>

        </section>

    );
};

export default AppDetails;