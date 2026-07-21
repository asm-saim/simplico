import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root/Root';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import AppDetails from '../pages/AppDetails/AppDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                Component: Home,
            },
            {
                path: "/apps",
                Component: Apps,
                loader: async () => {
                    const res = await fetch("/apps.json");
                    return res.json();
                }
            },
            {
                path: "/installation",
                Component: Installation,
            },
            {
                path: "/app-details/:id",
                Component: AppDetails,
                loader: async () => {
                    const res = await fetch("/apps.json");
                    return res.json();
                }
            },
        ]
    }
])