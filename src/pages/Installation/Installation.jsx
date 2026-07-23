import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstalledApps, removeInstalledApp } from '../../utility/utility';
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


    //uninstall apps:
    const handleUninstall = (id) => {
        // Remove from localStorage
        removeInstalledApp(id);

        // Update UI immediately
        const remaining = installedList.filter(app => app.id !== id);
        setInstalledList(remaining);
    };

    //sort:
    const [sort, setSort] = useState("")

    const handelSort = (type) => {
        setSort(type)

        if (type === "high-low") {
            const sortByHighToLow = [...installedList].sort((a,b) => b.downloads - a.downloads);
            setInstalledList(sortByHighToLow)
        }

        if (type === "low-high") {
            const sortByLowToHigh = [...installedList].sort((a, b) => a.downloads - b.downloads)
            setInstalledList(sortByLowToHigh)
        }
    }

    return (
        <div className=''>

            <div className='flex justify-between items-center my-5'>
                <h1 className='text-xl font-semibold'>{installedList.length} Apps Found</h1>
                <details className="dropdown ">
                    <summary className="btn m-1 border border-gray-400 text-base rounded-md">Sort by Downloads</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handelSort("high-low")}>HIGHT-LOW</a></li>
                        <li><a onClick={() => handelSort("low-high")}>LOW-HIGH</a></li>
                    </ul>
                </details>
            </div>

            {
                installedList.map(app => <Installed key={app.id} app={app}
                    handleUninstall={handleUninstall}
                ></Installed>)
            }
        </div>
    );
};

export default Installation;