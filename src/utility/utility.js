const getInstalledApps = () => {
    const storedApp = localStorage.getItem("appList")
    if (storedApp) {
        const storedAppData = JSON.parse(storedApp)
        return storedAppData
    }
    else {
        return [];
    }

}


const addToInstalledDB = (id) => {

    const storedApp = getInstalledApps();

    if (storedApp.includes(id)) {
        return false;
    }

    storedApp.push(id);
    localStorage.setItem("appList", JSON.stringify(storedApp));

    return true;

}

const removeInstalledApp = (id) => {
    const storedApps = getInstalledApps();

    const remainingApps = storedApps.filter(appId => appId !== id);

    localStorage.setItem("appList", JSON.stringify(remainingApps));
};

export { addToInstalledDB, getInstalledApps, removeInstalledApp };
