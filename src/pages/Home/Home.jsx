import React from 'react';
import Banner from '../../components/Banner/Banner';
import States from '../../components/States/States';
import HomeApps from '../HomeApps/HomeApps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <States></States>
            <HomeApps></HomeApps>
        </div>
    );
};

export default Home;