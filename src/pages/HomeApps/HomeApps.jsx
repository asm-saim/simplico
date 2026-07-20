import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import App from '../App/App';

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
        <div className='max-w-7xl mx-auto border'>
            HELLO FROM APPS
            <div className='grid grid-cols-4 gap-10'>
                {
                    homeApps.map(app => <App key={app.id} app={app}></App>)
                }
            </div>
        </div>
    );
};

export default HomeApps;