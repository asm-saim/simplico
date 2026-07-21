import React from 'react';
import { useLoaderData, useParams } from 'react-router';

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
    const { image, title, companyName, description, reviews, ratingAvg } = singleAppDetail;
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
        <div className='max-w-7xl mx-auto'>
            <div className='flex border gap-16'>
                <div>
                    <img src={image} className='w-90' alt="" />
                </div>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-bold'>{title}</h1>
                    <h2 className='text-xl font-semibold'>Developed by: 
                        <span className='text-blue-400 font-bold'> {companyName}</span> </h2>
                </div>
            </div>

        </div>
    );
};

export default AppDetails;