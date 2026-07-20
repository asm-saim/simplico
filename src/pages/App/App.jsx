import React from 'react';

const App = ({ app }) => {
    const { image, title, ratingAvg, downloads } = app;

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
        <div className='border border-amber-300'>
            <img src="" alt="" />
            <h3>{title}</h3>
            <div className='flex justify-between items-center'>
                <p>{downloads}</p>
                <p>{ratingAvg}</p>
            </div>

        </div>
    );
};

export default App;