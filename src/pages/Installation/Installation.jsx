import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstalledApps } from '../../utility/utility';
import Installed from './Installed';

const Installation = () => {

    const [installedList, setInstalledList] = useState([])

    const data = useLoaderData();

    //get stored id form local Storage:
    useEffect(() => {
        const storedAppId = getInstalledApps();
        // console.log(storedAppId)
        const myAppList = data.filter(app => storedAppId.includes(app.id));
        setInstalledList(myAppList)
    }, [data])

    return (
        <div className='mt-5 mb-10'>
            <h1 className='mb-5 text-xl font-semibold'>{installedList.length} Apps Found</h1>
            {
                installedList.map(app => <Installed key={app.id} app={app} ></Installed>)
            }
        </div>
    );
};

export default Installation;