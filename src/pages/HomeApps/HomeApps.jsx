import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const HomeApps = () => {

    //loading data using state and effect:
    const [homeApps, setHomeApps] = useState([]);

    useEffect(() => {
        fetch("apps.json")
            .then(res => res.json())
            .then(data => {
                setHomeApps(data)
                console.log(data)
            })
    }, [])
    return (
        <div className='max-w-7xl mx-auto border'>
            HELLO FROM APPS
        </div>
    );
};

export default HomeApps;