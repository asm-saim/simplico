import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import App from '../App/App';
import { Link } from 'react-router';

const HomeApps = () => {

    //loading data using state and effect:
    const [homeApps, setHomeApps] = useState([]);

    useEffect(() => {
        fetch("apps.json")
            .then(res => res.json())
            .then(data => {
                setHomeApps(data)
                // console.log(data)
            })
    }, [])
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='text-center space-y-3 mt-20 mb-10'>
                <h1 className='font-semibold text-5xl'>Trending Apps</h1>
                <p className='italic text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-4 gap-10'>
                {
                    homeApps.slice(0, 8).map(app => <App key={app.id} app={app}></App>)
                }
            </div>

            <div className="flex justify-center my-10">
                <Link to="/apps"
                    className="btn border-none rounded-lg text-base font-semibold bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6]"
                >
                    Show All
                </Link>
            </div>
        </div >
    );
};

export default HomeApps;