import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root/Root';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';

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
                loader:()=>fetch("apps.json")
            },
            {
                path: "/installation",
                Component: Installation,
            }
        ]
    }
])