import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import App from '../App/App';

const HomeApps = () => {
    const [homeApps, setHomeApps] = useState([]);

    useEffect(() => {
        fetch("apps.json")
            .then(res => res.json())
            .then(data => setHomeApps(data));
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">

            {/* Heading */}
            <div className="text-center space-y-4 mb-12">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
                    Trending Apps
                </h1>

                <p className="italic text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                    Explore all trending apps on the market developed by us.
                </p>
            </div>

            {/* App Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {homeApps.slice(0, 8).map(app => (
                    <App key={app.id} app={app} />
                ))}
            </div>

            {/* Button */}
            <div className="flex justify-center mt-12">
                <Link
                    to="/apps"
                    className="btn btn-sm md:btn-md border-none rounded-lg font-semibold bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6]"
                >
                    Show All
                </Link>
            </div>

        </section>
    );
};

export default HomeApps;