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
        alert("already installed")
    }
    else {
        storedApp.push(id)
        const data = JSON.stringify(storedApp)
        localStorage.setItem("appList", data)
        console.log(storedApp)
    }

}
export { addToInstalledDB };