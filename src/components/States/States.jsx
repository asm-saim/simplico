import React from 'react';

const States = () => {
    return (
        <div className='border-none bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] text-center py-20'>
            <h1 className='text-4xl font-bold'>Trusted by Millions, Built for You</h1>
            <div className='grid grid-cols-3 mt-10'>
                <div className='space-y-3'>
                    <p>Total Downloads</p>
                    <h1 className='text-6xl font-bold'>29.6M</h1>
                    <p>21% more than last month</p>
                </div>
                <div className='space-y-3'>
                    <p>Total Reviews</p>
                    <h1 className='text-6xl font-bold'>906K</h1>
                    <p>46% more than last month</p>
                </div>
                <div className='space-y-3'>
                    <p>Active Apps</p>
                    <h1 className='text-6xl font-bold'>132+</h1>
                    <p>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default States;