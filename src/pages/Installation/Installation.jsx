import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstalledApps, removeInstalledApp } from '../../utility/utility';
import Installed from './Installed';
import { MdArrowDropDown } from "react-icons/md";

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
            const sortByHighToLow = [...installedList].sort((a, b) => b.downloads - a.downloads);
            setInstalledList(sortByHighToLow)
        }

        if (type === "low-high") {
            const sortByLowToHigh = [...installedList].sort((a, b) => a.downloads - b.downloads)
            setInstalledList(sortByLowToHigh)
        }
    }

    return (
        <div className='px-4 sm:px-6 lg:px-8'>

            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 my-5'>
                <h1 className='text-lg sm:text-xl font-semibold'>{installedList.length} Apps Found</h1>
                <details className="dropdown self-start sm:self-auto">
                    <summary className="btn btn-sm sm:btn-md m-1 border border-gray-500 text-sm sm:text-base rounded-md">Sort by Downloads<MdArrowDropDown size={25} className="-mx-1" /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-48 sm:w-52 p-2 shadow-sm">
                        <li><a onClick={() => handelSort("high-low")}>HIGHT-LOW</a></li>
                        <li><a onClick={() => handelSort("low-high")}>LOW-HIGH</a></li>
                    </ul>
                </details>
            </div>

            <div className='flex flex-col gap-3 sm:gap-4'>
                {
                    installedList.map(app => <Installed key={app.id} app={app}
                        handleUninstall={handleUninstall}
                    ></Installed>)
                }
            </div>
        </div>
    );
};

export default Installation;