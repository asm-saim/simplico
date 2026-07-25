import React from 'react';
import Banner from '../../components/Banner/Banner';
import States from '../../components/States/States';
import HomeApps from '../HomeApps/HomeApps';

const Home = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Banner></Banner>
            </div>
            <div className=''>
                <States></States>

            </div>
            <div className='max-w-7xl mx-auto'>
                <HomeApps></HomeApps>
            </div>
        </div>
    );
};

export default Home;