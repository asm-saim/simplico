import React from 'react';
import { useLoaderData } from 'react-router';
import App from '../App/App';

const Apps = () => {

    const allApps = useLoaderData()

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-4 gap-10 my-10'>
                {
                    allApps.map(app => <App key={app.key} app={app} ></App>)
                }
            </div>
        </div>

    );
};

export default Apps;