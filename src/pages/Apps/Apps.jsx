import React from 'react';
import { useLoaderData } from 'react-router';
import App from '../App/App';
import { useState } from 'react';

const Apps = () => {

    const allApps = useLoaderData()

    const [search, setSearch] = useState("");

    const filteredApps = allApps.filter(app => app.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='text-center space-y-3 mt-5 mb-5'>
                <h1 className='font-semibold text-5xl'>Our All Applications</h1>
                <p className='italic text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='font-semibold text-xl'>({filteredApps.length}) Apps Found</p>
                <input
                    type="text"
                    placeholder="Search apps..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input input-bordered w-80 text-base focus:outline-none focus:ring-0 focus:shadow-none focus:border-gray-600"
                />

            </div>
            <div className='grid grid-cols-4 gap-10 my-10'>
                {
                    filteredApps.map(app => <App key={app.id} app={app} ></App>)
                }
            </div>
        </div>

    );
};

export default Apps;