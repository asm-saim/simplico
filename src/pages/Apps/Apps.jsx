import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import App from '../App/App';

const Apps = () => {
    const allApps = useLoaderData();
    const [search, setSearch] = useState("");

    const filteredApps = allApps.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="max-w-7xl mx-auto px-4 py-10">

            {/* Heading */}
            <div className="text-center space-y-4 mb-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    Our All Applications
                </h1>

                <p className="italic text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                    Explore all apps on the market developed by us. We code for millions.
                </p>
            </div>

            {/* Search */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">

                <p className="font-semibold text-lg md:text-xl">
                    ({filteredApps.length}) Apps Found
                </p>

                <input
                    type="text"
                    placeholder="Search apps..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input input-bordered w-full md:w-80 text-base focus:outline-none focus:ring-0 focus:shadow-none focus:border-gray-600"
                />
            </div>

            {/* Apps */}
            {filteredApps.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {filteredApps.map(app => (
                        <App key={app.id} app={app} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <h2 className="text-2xl font-bold text-gray-400">
                        No apps found
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Try searching with a different keyword.
                    </p>
                </div>
            )}
        </section>
    );
};

export default Apps;