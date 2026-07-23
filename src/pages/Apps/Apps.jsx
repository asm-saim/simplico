import React from 'react';
import { useLoaderData } from 'react-router';
import App from '../App/App';

const Apps = () => {

    const allApps = useLoaderData()

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='text-center space-y-3 mt-5 mb-5'>
                <h1 className='font-semibold text-5xl'>Our All Applications</h1>
                <p className='italic text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='font-semibold text-xl'>({allApps.length}) Apps Found</p>
                <p className=' text-base text-gray-200 border border-gray-600 pr-20 pl-3  rounded-md py-1'>search Apps</p>
            </div>
            <div className='grid grid-cols-4 gap-10 my-10'>
                {
                    allApps.map(app => <App key={app.id} app={app} ></App>)
                }
            </div>
        </div>

    );
};

export default Apps;